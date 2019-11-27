import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return {
      reports: this.store.peekAll("report"),
      speaker: this.store.peekAll("speaker"),
      books: this.store.peekAll("book")
    };
  },

  setupController(controller, model) {
    const { reports, speakers, books } = model;
    this._super(controller, reports);

    controller.set("speakers", speakers);
    controller.set("books", books);
  }
});
