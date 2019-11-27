import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("book", params.book_id);
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
