let s = 'topspot';
let x = 1;

for (let i = 0; i < s.length ; i++) {
    if (s.charAt(i) == s.charAt(s.length-1-i)){
        continue;
    } else {
      console.log('Not a palindrome');
      x = 0;
      break;
    }
}

if (x == 1) {
    console.log('It is a palindrome');
}