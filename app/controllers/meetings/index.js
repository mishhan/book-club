import Controller from "@ember/controller";
import { isEqual } from "@ember/utils";
import { computed } from "@ember/object";

export default Controller.extend({

  meetings: computed.alias('model'),
  meetingsCountChaged: computed.alias('model.length'),

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  sortDefinition: ['date:desc', 'reports.length:desc'],
  sortedMeetings: computed.sort('meetings', 'sortDefinition'),

  filterSpeaker: null,
  filterBook: null,
  filterDate: null,

  actions: {
    deleteReport(report) {
      report.destroyRecord();
    },

    deleteMeeting(meeting) {
      meeting.destroyRecord()
      .then((deletedMeeting) => {
        deletedMeeting.reports.forEach(report => report.destroyRecord());
      });
      //need to call filter after removing meeting
      this.actions.filterMeetings({ speaker: this.filterSpeaker, book: this.filterBook, date: this.filterDate });
    },

    filterMeetings(filterData) {
      const { date, speaker, book } = filterData;
      if (date || speaker || book) {
        let allMetings = this.sortedMeetings;
        return allMetings.filter(item => {
          let result = true;
          result = date
            ? // eslint-disable-next-line no-undef
              moment(date).isSame(item.get("date"), "day")
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
