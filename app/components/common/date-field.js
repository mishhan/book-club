import Component from "@ember/component";
import JQuery from "jquery";

export default Component.extend({

  date: null,
  dateFormat: 'DD.MM.YYYY hh:mm',

  didInsertElement() {
    this._super(...arguments);
    JQuery(`#${this.elementId} input.form-control`).datetimepicker({
      date: this.date,
      format: this.dateFormat,
      showClear: true,
      icons: {
        time: "far fa-clock",
        date: "far fa-calendar-alt",
        up: "far fa-arrow-alt-circle-up",
        down: "far fa-arrow-alt-circle-down",
        previous: "far fa-arrow-alt-circle-left",
        next: "far fa-arrow-alt-circle-right",
        today: "far fa-calendar-check",
        clear: "far fa-trash-alt",
        close: "far fa-times-circle"
      }
    });
  }
});
