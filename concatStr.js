let s = 'Big';
let n = 5;

for (let i = 0; i<n; i++) {
    s.concat(s);
}

console.log(s);