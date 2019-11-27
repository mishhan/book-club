import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deleteReport(report) {
      report.destroyRecord();
    }
  }
});
