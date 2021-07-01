export default class GoblinGame {
  constructor(gameField, goblin) {
    this.gameField = gameField;
    this.goblin = goblin;
    this.init();
  }

  init(){
    this.resetGame()
    this.listenerCounter()
  }

  resetGame() {
    this.hitCounter = 0;
    this.missCounter = 0;
    this.drawCount()
  }

  drawCount() {
    this.gameField.hitBlock.textContent = this.hitCounter;
    this.gameField.missBlock.textContent = this.missCounter;
  }

  listenerCounter() {
    document.addEventListener('mousedown', event => {
      if (event.target.closest('.goblin')) {
        this.hitCounter++;
        this.drawCount();
        this.nextGoblinStep();
      } else if(event.target.closest('.game-field')) {
        this.missCounter++;
        this.drawCount();
        this.gamecheck();
      }
    })
  }

  nextGoblinStep() {
    this.goblin.stopActive();
    this.goblin.movementGoblin();
  }

  gamecheck() {
    if (this.missCounter <= 5) {
      return;
    }
    alert('вы проиграли((');
    this.resetGame();
  }
}