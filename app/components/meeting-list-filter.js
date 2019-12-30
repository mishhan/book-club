import Component from "@ember/component";
import { observer } from "@ember/object";

export default Component.extend({
  tagName: "",

  selectedSpeaker: null,
  selectedBook: null,
  filterDate: null,

  collectionChaged: false,

  init() {
    this._super(...arguments);
    this.set("results", this.filterAction({}));
  },

  obsCollectionChanged: observer('collectionChaged', function() {
    this.set('results', 
      this.filterAction({
        date: this.filterDate
          ? // eslint-disable-next-line no-undef
            moment(this.filterDate, "DD.MM.YYYY hh:mm")._d
          : null,
        speaker: this.selectedSpeaker,
        book: this.selectedBook
    }));
  }),

  actions: {
    filter() {
      this.set(
        "results",
        this.filterAction({
          date: this.filterDate
            ? // eslint-disable-next-line no-undef
              moment(this.filterDate, "DD.MM.YYYY hh:mm")._d
            : null,
          speaker: this.selectedSpeaker,
          book: this.selectedBook
        })
      );
    }
  }
});
