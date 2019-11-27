import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return {
      reports: this.store.createRecord("report"),
      speakers: this.store.peekAll("speaker"),
      books: this.store.peekAll("book")
    };
  },

  setupController(controller, model) {
    const { reports, speakers, books } = model;
    this._super(controller, reports);

    controller.set("speakers", speakers);
    controller.set("books", books);
  },

  actions: {
    // eslint-disable-next-line no-unused-vars
    willTransition(transition) {
      if (!this.controller.model.isSaving) {
        this.controller.model.rollbackAttributes();
      }
    }
  }
});
