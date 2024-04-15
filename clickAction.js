
import { findDescription } from "./helpers.js";
import { arrayOfCard } from "./index.js";

const infoBlock = document.querySelector('#block-info');

let arrPairs = [];

export function clickAction(element) {                                    // колбэк-функция, обработчик нажатия на карточку 
  if (element.open) {                                                     // повторное нажатие
    infoBlock.textContent = 'Вы нажали на открытую карту';
    setTimeout(() => infoBlock.textContent = '', 2000);
  }
  else arrPairs.push(this);                                               // добавляю в массив пары
  element.open = true;                                                    // помечаю открытыми
  element.element.textContent = this.cardNumber;                          // показываю номер

  if (arrPairs.length === 2) {                                            // если открыто две карты

    if (arrPairs[0].cardNumber !== arrPairs[1].cardNumber) {              // если числа карт не равны

      arrPairs.forEach(el => el.element.classList.add('bg-danger'));      // помечаю красным

      setTimeout(() => {                                                  // убираю красный цвет
        arrPairs.forEach(el => {                                          // и номер
          el.element.classList.remove('bg-danger');
          el.element.textContent = '';
          el.open = false;                                                // помечаю как закрытую
        })
        arrPairs = [];                                                    // очищаю массив
        infoBlock.textContent = '';                                       // стираю инфо-блок
      }, 500);
    }

    else {                                                                // если числа карт равны
      arrPairs.forEach(el => {
        el.element.classList.add('bg-success');                           // помечаю зелёным
        el.success = true;                                                // и отгаданным
      })

      // определяю количество закрытых пар, вывожу текст
      let notFoundPair = arrayOfCard.filter(el => !el.success).length / 2;
      infoBlock.textContent = findDescription(notFoundPair);

      arrPairs = [];
    }
  }
}