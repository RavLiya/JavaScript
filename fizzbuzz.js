for(let j = 1; j < 35; j++) {
    let x = j % 3;
    let y = j % 5;

    if (x == 0 && y == 0) {
        console.log('fizz buzz');
        continue;
    }

    if (x == 0) {
        console.log( 'fizz' );
        continue;
    }

    if (y == 0) {
        console.log( 'buzz' );
        continue;
    }

    console.log(j);

}