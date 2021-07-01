export default class DrawGameField {
  constructor() {
    this.fieldSize = 4;

    this.drawGameField();
    this.fieldsHitAndMiss();
  }

  drawGameField() {
    this.gameFieldConteiner = document.createElement('div');
    this.gameFieldConteiner.classList.add('game-field-container');

    this.gameField = document.createElement('div');
    this.gameField.classList.add('game-field');

    this.gameFieldConteiner.appendChild(this.gameField);

    for (let i = 0; i < this.fieldSize ** 2; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.gameField.appendChild(cell);
    }

    document.body.appendChild(this.gameFieldConteiner);

    this.arrayCells = Array.from(this.gameField.children);
  }

  fieldsHitAndMiss() {
    this.hitBlock = document.createElement('p');
    this.hitBlock.classList.add('hit');

    this.missBlock = document.createElement('p');
    this.missBlock.classList.add('miss');

    this.gameFieldConteiner.insertAdjacentElement('afterbegin', this.hitBlock);
    this.gameFieldConteiner.appendChild(this.missBlock);
  }
}
