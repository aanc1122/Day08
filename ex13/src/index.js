function randomRangeNumber(minNumber, maxNumber) {
 return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

}
randomRangeNumber(1,9);
console.log(randomRangeNumber(1,9));
module.exports = randomRangeNumber;