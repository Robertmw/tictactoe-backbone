import $ from 'jquery';
import { View } from 'backbone';
import _ from 'underscore';

export default View.extend({
  tagName: 'div',
  className: 'cell',
  template: '',

  initialize() {
    this.template = _.template($('#cell-template').html());

    this.model.on('change', this.render, this);
  },

  events: {
    click: 'handleOnSelect'
  },

  render() {
    this.$el.html(this.template(this.model.attributes));

    return this;
  },

  handleOnSelect() {
    this.model.updateValue(window.game.get('currentPlayer'));

    window.game.alternatePlayer();
  }
});
