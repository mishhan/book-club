import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  selectedSpeaker: null,
  selectedBook: null,
  filterDate: null,

  init() {
    this._super(...arguments);
    this.set("results", this.filterAction({}));
  },

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
