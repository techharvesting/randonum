// Function which returns 1 random number between two numbers
module.exports.getRandomInt =  (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}