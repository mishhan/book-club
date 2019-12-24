import Controller from "@ember/controller";
import { isEqual } from "@ember/utils";
import { computed } from "@ember/object";

export default Controller.extend({

  meetings: computed.alias('model'),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  sortDefinition: ['date:desc', 'reports.length:desc'],
  sortedMeetings: computed.sort('meetings', 'sortDefinition'),

  filterDate: null,

  actions: {
    filterMeetings(filterData) {
      const { date, speaker, book } = filterData;
      if (date || speaker || book) {
        let allMetings = this.sortedMeetings;
        return allMetings.filter(item => {
          let result = true;
          result = date
            ? // eslint-disable-next-line no-undef
              moment(date).isSameOrAfter(item.get("date"), "day")
            : result;
          result = book
            ? item.get("reports").filter(report => {
                return isEqual(report.get("book").content, book);
              }).length > 0
            : result;
          result = speaker
            ? item.get("reports").filter(report => {
                return isEqual(report.get("speaker").content, speaker);
              }).length > 0
            : result;
          return result;
        });
      } else {
        return this.sortedMeetings;
      }
    }
  }
});
