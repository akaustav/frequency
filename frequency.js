// Program to replace the two highest frequently occuring characters with x

let statement = 'Sanghamitras';

/*['S', 'a', 'n', ...];

{
  'S': 1,
  'a': 3,
  ...
}

[
  ['S', 1],
  ['a', 3],
  ['n', 1],
  ...
]*/

let statementLower = statement.toLowerCase();
let splitStatement = statementLower.split('');
let sortedSplitStatement = splitStatement.sort();

console.log(sortedSplitStatement);


let high1 = 1;
let high2 = 0;

for (let i = 0, len = sortedSplitStatement.length; i < len; ++i) {
  console.log('Loop ' + i + ': ' + sortedSplitStatement[i] + ', ' + sortedSplitStatement[i + 1]);
  console.log('Before loop ' + i + ': high1 = ' + high1 + '; high2 = ' + high2);

  if (sortedSplitStatement[i] === sortedSplitStatement[i + 1]) {
    high1++;
  } else {
    high2 = 1;
  }

  console.log('Before loop ' + i + ': high1 = ' + high1 + '; high2 = ' + high2);
}
