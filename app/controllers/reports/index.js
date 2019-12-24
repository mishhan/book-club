import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({

  reports: computed.alias('model'),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  sortDefinition: ['date:desc', 'speaker.name:asc', 'book.name:asc'],
  sortedReports: computed.sort('reports', 'sortDefinition'),

  actions: {
    deleteReport(report) {
      report.destroyRecord();
    }
  }
});
