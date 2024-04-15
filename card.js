
import { numbersOfCard } from "./index.js";

export class Card {
  constructor(container, cardNumber, flip) {
    this.cardNumber = cardNumber + 1;
    this.container = container;
    this.flip = flip
    this.element = this.createElement();
    this.open = false;
    this.success = false;
  }

  createElement() {
    let card = document.createElement('div');
    card.classList.add('card', 'mb-1', 'd-flex', 'align-items-center', 'justify-content-center', 'fs-4');
    card.style = `width: ${(100 - numbersOfCard * 2) / numbersOfCard}%`;  // вычисляю размеры карточек
    card.style.aspectRatio = 1;                                           // высота = ширина

    card.addEventListener('click', () => { this.flip(this) })

    this.container.append(card);                                          // добавляю карточку на поле
    return card;
  }

  set cardNumber(value) {                                                 // cardNumber
    this._cardNumber = value;
    if (this.element) this.element.textContent = value;
  }
  get cardNumber() { return this._cardNumber }

  set open(value) { this._open = value }                                  // open
  get open() { return this._open }

  set success(value) { this._success = value }                            // success
  get success() { return this._success }
}