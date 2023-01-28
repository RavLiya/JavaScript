let s = 'Get on the floor';

let i =0;

for (let j = 0; j < s.length; j++) {
    let c = s.charAt(j);
    if (c == " ") {
        continue;
    }
    for (let k = 0; k < s.length; k++) {
        if (s.charAt(k) == c) {
            i++;
        }
    }
    console.log(`Number of occurence of ${c} is ${i}`);
    i = 0;
}