import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  actions: {
    deleteReport(report) {
      this.deleteReport(report);
    }
  }
});
