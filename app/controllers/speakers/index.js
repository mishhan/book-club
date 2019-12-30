import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({

  speakers: computed.alias('model'),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  sortDefinition: ['reports.length:desc', 'name:asc'],
  sortedSpeakers: computed.sort('speakers', 'sortDefinition'),

  actions: {
    deleteSpeaker(speaker) {
      speaker.destroyRecord()
      .then((deletedSpeaker) => {
        deletedSpeaker.reports.forEach(report => report.destroyRecord());
      });
    }
  }
});
