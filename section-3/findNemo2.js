// #1 -- For loop in Javascript.
const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
  'nemo',
];
const large = new Array(1000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO 🐠!');
    }
  }
}

findNemo(large); // O(n) --> Linear Time

// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes) // O(1)
