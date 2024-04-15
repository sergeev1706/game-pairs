
import { Card } from "./card.js";
import { clickAction } from "./clickAction.js";

const root = document.querySelector('#root');
root.style = 'width: 75vh';

export const numbersOfCard = 4;                                           // количестрво карт в строке/столбце
export const arrayOfCard = [];                                            // массив карт

let arrayOfNumbers = [
  ...Array(numbersOfCard ** 2 / 2).keys(),                                // создал массив  
  ...Array(numbersOfCard ** 2 / 2).keys()                                 // в двойном экземпляре
].sort(() => Math.random() - 0.5)                                         // перемешал

// создаю карты, добавляю в DOM
arrayOfNumbers.forEach(cardNumber => {
  arrayOfCard.push(new Card(root, cardNumber, clickAction));
})
