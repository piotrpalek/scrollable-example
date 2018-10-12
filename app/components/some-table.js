import Component from '@ember/component';
import Table from 'ember-light-table';
import { computed }  from '@ember/object';

export default Component.extend({
  model: [ { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }],

  columns: computed(function() {
    return [{
      label: 'Test',
      valuePath: 'test',
      width: '60px',
    }];
  }),

  init() {
    this._super(...arguments);
    let table = new Table(this.get('columns'), this.get('model'));
    this.set('table', table);
  },

  didRender() {
    console.log('did render in table');
  }
});
