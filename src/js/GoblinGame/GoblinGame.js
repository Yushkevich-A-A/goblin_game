export default class GoblinGame {
  constructor(gameField, goblin) {
    this.gameField = gameField;
    this.goblin = goblin;
    this.hitCounter = 0;
    this.missCounter = 0;
    this.init();
  }

  init(){
    this.drawCount()
    // addListeners()
  }

  drawCount() {
    this.gameField.hitBlock.textContent = this.hitCounter;
    this.gameField.missBlock.textContent = this.missCounter;
  }

  // addListeners() {
  //   document.addEventListener('mouseup', event => {
  //     this.gameField.gameField.style.cursor = ''
  //   })
  // }
}