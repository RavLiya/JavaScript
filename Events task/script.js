const Form = document.querySelector("form");
const Inputtext = document.getElementById("Input-Text");
const ItemList = document.getElementById("list");
const InputDate = document.getElementById("Input-date");
const dropDown = document.getElementById("selected");

const TodoItem = [];

Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = document.createElement("li");
    newItem.classList.add('list');
    

    if (InputDate.value && Inputtext.value !== "") {

        const dlt = document.createElement('button');
        dlt.classList.add('btn');
        dlt.appendChild(document.createTextNode("Delete"));
        dlt.onclick = function () {
            ItemList.removeChild(newItem);

        }

        if (dropDown.options[dropDown.selectedIndex].value == "High") {
            newItem.classList.add('listHigh');
        } else if (dropDown.options[dropDown.selectedIndex].value == "Medium") {
            newItem.classList.add('listMedium');
        } else if (dropDown.options[dropDown.selectedIndex].value == "Low") {
            newItem.classList.add('listLow');
        }

        newItem.innerText = Inputtext.value + "     " + InputDate.value + "     " + dropDown.options[dropDown.selectedIndex].value;
        newItem.appendChild(dlt);
        Inputtext.value = "";
        InputDate.value = "";
        ItemList.appendChild(newItem);
        TodoItem.push(newItem);


    } else {

        alert("enter the todo list");
    }
})
console.log(TodoItem);
