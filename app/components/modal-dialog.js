import Component from '@ember/component';
import jQuery from 'jquery';
import { observer } from '@ember/object';

export default Component.extend({
  tagName: 'div',
  classNames: ['modal', 'fade'],

  isOpen: false,

  openCloseObserver: observer('isOpen', function () {
    if (this.isOpen) {
      jQuery(`#${this.elementId}`).modal({ backdrop: 'static', keyboard: false }, 'show');
    }
    else {
      jQuery(`#${this.elementId}`).modal('hide');
    }
  })
});
