import { View } from 'backbone';

import CellView from '../Cell/view';

function cellRender(model) {
  const cellView = new CellView({ model });

  this.$el.append(cellView.render().el);
}

export default View.extend({
  tagName: 'div',
  template: '',

  render() {
    this.$el.html();

    const matrix = this.model.get('matrix');

    matrix.each(cellRender.bind(this));

    return this;
  }
});
