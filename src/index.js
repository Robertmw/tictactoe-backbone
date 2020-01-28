import $ from 'jquery';

import Board from './Board/model';
import BoardView from './Board/view';

window.game = new Board(3);
const gameView = new BoardView({
  el: $('#board-game'),
  model: window.game
});

gameView.render();
