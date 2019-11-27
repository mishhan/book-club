import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deleteSpeaker(speaker) {
      speaker.destroyRecord();
    }
  }
});
