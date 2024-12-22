1;
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
const items = ["mango", "strawberry", "cherry"];
logItems(items);

2;
function calculateEngravingPrice(text, costPerWord) {
  const wordsArray = text.split(" ");
  const totalPrice = wordsArray.length * costPerWord;
  return totalPrice;
}
const sampleMessage = "приклад гравіювання";
const wordCost = 13; // Ціна за слово
const engravingCost = calculateEngravingPrice(sampleMessage, wordCost);
console.log(`сума гравіювання ${engravingCost}`);

3;
function findLongestWord(text) {
  const wordsArray = text.split(" ");
  let longestWord = wordsArray[0];
  for (const word of wordsArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("юля завтра не прийде на урок французької."));

4;
function formatText(text) {
  if (text.length <= 40) {
    return text;
  } else {
    return text.slice(0, 40) + "...";
  }
}
const shortText = "рядок є коротким.";
const longText = "рядок є довшим за 40 символів і потребує форматування.";
console.log(formatText(shortText));
console.log(formatText(longText));

5;
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam("це неймовірна розпродаж"));
console.log(checkForSpam("остерігайтеся спам-листів"));

6;
function calculateTotal() {
  const nums = [];
  let sum = 0;
  let userInput;

  while (true) {
    userInput = prompt("введіть число:");
    if (userInput === null) {
      break;
    }
    userInput = Number(userInput);
    if (isNaN(userInput)) {
      alert("було введено не число, спробуйте ще раз");
      continue;
    }

calculateTotal();

7;
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");
    if (input === null) {
        break;
  }