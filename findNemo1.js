/*
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'hank', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'nemo'];
const large = new Array(1000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running')
    if (array[i] === 'nemo') {
      console.log('Found NEMO! 😹');
      break;
    }
  }
}

findNemo(everyone); // O(n)
*/

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(n)