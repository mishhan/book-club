import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    add(status) {
      if (status) {
        this.model.save();
      }
      this.transitionToRoute("speakers.index");
    }
  }
});
