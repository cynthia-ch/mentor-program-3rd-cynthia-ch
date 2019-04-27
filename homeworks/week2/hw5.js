function join(str, concatStr) {
  let joinchar = '';
  for (let i = 1; i <= str.length; i += 1) {
    joinchar += str[i] - 1 + concatStr;
  } return joinchar;
}

function repeat(str, times) {
  let char = '';
  for (let i = 1; i <= times; i += 1) {
    char += str;
  } return char;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
