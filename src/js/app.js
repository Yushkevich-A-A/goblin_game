import Cursor from './Cursor/Cursor';
import DrawGameField from './gameField/gameField';
import Goblin from './Goblin/Goblin';
import GoblinGame from './GoblinGame/GoblinGame';

const gameField = new DrawGameField();
const goblin = new Goblin();

const game = new GoblinGame(gameField, goblin);

new Cursor();