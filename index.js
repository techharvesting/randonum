// Function which returns 1 random number between two numbers
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}