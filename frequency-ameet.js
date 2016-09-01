// Program to replace the two highest frequently occuring characters with x

let statement = 'Sanghamitras';
let replacechar = 'x';

/*
[
  {char: 'a', freq: 3},
  {char: 'g', freq: 1},
  ...
]
*/

let statementLower = statement.toLowerCase();
let splitStatement = statementLower.split('');
//splitStatement = splitStatement.sort();

console.log(splitStatement); // [ 'a', 'a', 'a', 'g', 'h', 'i', 'm', 'n', 'r', 's', 's', 't' ]


// Create the frequency array
let frequencyArray = [];
let i;
let len;

for (i = 0, len = splitStatement.length; i < len; ++i) {
  let el = splitStatement[i];
  let found = false;

  let j;
  var flen;
  let obj;

  for (j = 0, flen = frequencyArray.length; j < flen; ++j) {
    obj = frequencyArray[j];

    if (obj.char === el) {
      found = true;
      break;
    }
  }

  if (found === true) {
    frequencyArray[j].freq++;
  } else {
    let temp = {char: el, freq: 1};
    frequencyArray.push(temp);
  }

  console.log('After Loop ' + i + ' frequencyArray is:\n' + JSON.stringify(frequencyArray) );
  console.log('----------------------');
}


// Sort the frequency array in descending order of frequency
frequencyArray = frequencyArray.sort(function(a, b) {
  return b.freq - a.freq;
});

console.log('After sorting frequencyArray is:\n' + JSON.stringify(frequencyArray) );


let high1;
let high2;

// Find the highest 2 occurences
if (flen > 0) {
  high1 = frequencyArray[0].char;

  if (flen > 1) {
    high2 = frequencyArray[1].char;
  }
}


let replacedStatement;
let it;

for (it = 0; it < len; ++it) {
  if (    (high1 !== undefined && splitStatement[it] === high1)
       || (high2 !== undefined && splitStatement[it] === high2) ) {
    splitStatement[it] = replacechar;
  }
}

replacedStatement = splitStatement.join('');
console.log('Replaced String is: ' + replacedStatement);
