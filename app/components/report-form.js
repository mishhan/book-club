import Component from "@ember/component";
import JQuery from "jquery";

export default Component.extend({
  tagName: "",

  didInsertElement() {
    this._super(...arguments);
    JQuery("#report-date").datetimepicker({
      date: this.report.date,
      format: "DD-MM-YYYY hh:mm A",
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
  },

  actions: {
    add() {
      this.addCancel(true);
    },

    cancel() {
      this.addCancel(false);
    }
  }
});
