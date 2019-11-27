import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return {
      meetings: this.store.peekAll("meeting"),
      reports: this.store.peekAll("report"),
      speakers: this.store.peekAll("speaker"),
      books: this.store.peekAll("book")
    };
  },

  setupController(controller, model) {
    const { meetings, speakers, books } = model;
    this._super(controller, meetings);

    controller.set("speakers", speakers);
    controller.set("books", books);
  }
});
