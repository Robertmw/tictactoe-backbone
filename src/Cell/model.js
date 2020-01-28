import { Model } from 'backbone';

export default Model.extend({
  defaults: {
    value: null,
    row: 0,
    column: 0
  },

  updateValue(nextValue) {
    if (!this.get('value')) {
      this.set('value', nextValue);
    }
  }
});
