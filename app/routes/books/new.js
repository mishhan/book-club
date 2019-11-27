import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.createRecord("book");
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
