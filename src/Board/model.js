import { Model, Collection } from 'backbone';

import Cell from '../Cell/model';

const VALUE_X = 'X';
const VALUE_ZERO = '0';

const Matrix = Collection.extend({
  model: Cell
});

function createMatrix(size) {
  const matrix = new Matrix();
  let rowIndex = 0;

  while (rowIndex < size) {
    let columnIndex = 0;

    while (columnIndex < size) {
      matrix.add(new Cell({ value: null, row: rowIndex, column: columnIndex }));

      columnIndex += 1;
    }
    rowIndex += 1;
  }

  return matrix;
}

export default Model.extend({
  defaults: {
    size: 3,
    currentPlayer: VALUE_X
  },

  initialize(size, firstPlayer) {
    if (parseInt(size, 10) > 0) {
      this.set({ matrix: createMatrix(size) });
    }

    if (firstPlayer && firstPlayer !== this.get('currentPlayer')) {
      this.set('currentPlayer', firstPlayer);
    }

    this.on('test', () => {
      console.log('aaa');
    });
  },

  alternatePlayer() {
    this.set({
      currentPlayer:
        this.get('currentPlayer') === VALUE_X ? VALUE_ZERO : VALUE_X
    });
  }
});
