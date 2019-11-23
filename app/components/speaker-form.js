import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    add() {
      this.addCancel(true);
    },

    cancel() {
      this.addCancel(false);
    }
  }
});
