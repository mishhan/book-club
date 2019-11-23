import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    add(status) {
      if (status) {
        this.model.save();
      } else {
        this.model.rollbackAttributes();
      }
      this.transitionToRoute("speakers.index");
    }
  }
});
