const inputLetters = [];
const word = 'bills';
const wordArray = word.split('');
const correctLetters = [];
const chances = word.length +2;
let chancesLeft = chances; 



window.addEventListener('DOMContentLoaded', () =>{

    const $btn = document.getElementById('enter');
    const $numberDiv = document.getElementById('number');
    const $letter = document.getElementById('letterInput');
    
    $btn.addEventListener('click', () => {
        console.log('keypressed');
        $numberDiv.innerHTML = "";
        const $noOfChances = document.createElement('h1');
        $noOfChances.innerText = '';
        chancesLeft -=  1; 
        $noOfChances.innerText = chancesLeft;
        $numberDiv.appendChild($noOfChances);
        const sym = $letter.value;
        $letter.value = "";
        inputLetters.push(sym);
        console.log(inputLetters);
        
        if (checkTheLetter(sym)) {
            console.log(correctLetters);
        } 

        const result = checkWin();
        if (result) {
            document.getElementById('chances').remove();
            $numberDiv.remove();
            const $winNotice = document.createElement('h1');
            document.body.appendChild($winNotice);
            $winNotice.innerText = " You Won! ";

        }

        if (chancesLeft <= 0) {
            $letter.remove();
            $btn.remove();
        }
        
    })

})

function checkTheLetter(letterIn) {

    if (wordArray.includes(letterIn)){  
        correctLetters.push(letterIn); 
        const index = wordArray.indexOf(letterIn);
        wordArray.splice(index, 1);
        console.log(wordArray);    
        return true;
    } else {
        return false;
    }
}

function checkWin () {
    if (wordArray.length == 0 && correctLetters.length == word.length){
        console.log('Won!');

        return true;
    } else {
        if (chancesLeft <= 0) {
        console.log('Lost!');
        const $tryAgain = document.createElement('button');
        $tryAgain.innerText = 'Try Again';
        document.body.appendChild($tryAgain);

        $tryAgain.addEventListener('click', () => {
        window.location.reload();
        })
        return false;
        
        }
    }

}