const button = document.getElementById("mainButton");
const message = document.getElementById("message");

const questions = [
  "Did you know that ",
  "Were you aware that ",
  "Did you realize that ",
];

const statements = [
  "It might surprise you to learn that ",
  "You might find it interesting that ",
  "Here's a fun fact: ",
];

const facts = [
  "bananas are berries, but strawberries aren’t",
  "a day on Venus is longer than a year on Venus",
  "octopuses have three hearts, and two stop beating when they swim",
  "honey never spoils",
  "the human brain generates enough electricity to power a small light bulb",
  "Cleopatra lived closer in time to the invention of the iPhone than to the construction of the Great Pyramid of Giza",
  "the Eiffel Tower can grow more than six inches taller during the summer due to heat expansion",
  "the shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting just 38 minutes",
  "the oldest known recipe is for beer, dating back to around 5,000 BCE",
  "Russia is so large that it spans 11 time zones",
  "the Dead Sea is so salty that people can float effortlessly on its surface",
  "Canada has more lakes than the rest of the world combined",
  "a group of flamingos is called a 'flamboyance'",
  "a shrimp's heart is located in its head",
  "the average human produces enough saliva in a lifetime to fill two swimming pools",
  "the average cloud weighs about a million pounds",
  "the only two countries without official rivers are Saudi Arabia and Vatican City",
  "goats have rectangular pupils, which give them panoramic vision",
  "a snail can sleep for up to three years",
  "humans share about 60% of their DNA with bananas",
  "your tongue is the only muscle in your body that is attached at just one end",
  "the guillotine was used as a form of execution in France until 1977",
  "some metals, like gallium, melt in your hand",
];

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const changeMessage = () => {
  const num = Math.floor(Math.random() * 2);
  const intro =
    num === 0 ? getRandomElement(questions) : getRandomElement(statements);
  const fact = getRandomElement(facts);
  const punctuation = num === 0 ? "?" : "!";

  message.textContent = `${intro}${fact}${punctuation}`;
};

button.addEventListener("click", changeMessage);
