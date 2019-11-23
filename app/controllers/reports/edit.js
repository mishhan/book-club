import Controller from "@ember/controller";

export default Controller.extend({
  showSpeakerModal: false,
  showBookModal: false,

  newSpeaker: null,
  newBook: null,

  actions: {
    add(status) {
      if (status) {
        this.model.save();
      } else {
        this.model.rollbackAttributes();
      }
      this.transitionToRoute("reports.index");
    },

    showSpeakerModal() {
      this.set("newSpeaker", this.store.createRecord("speaker"));
      this.set("showSpeakerModal", true);
    },

    closeSpeakerModal(closeStatus) {
      this.set("showSpeakerModal", false);
      if (closeStatus) {
        this.newSpeaker.save();
        this.set("model.speaker", this.newSpeaker);
      } else {
        this.newSpeaker.rollbackAttributes();
      }
    },

    showBookModal() {
      this.set("newBook", this.store.createRecord("book"));
      this.set("showBookModal", true);
    },

    closeBookModal(closeStatus) {
      this.set("showBookModal", false);
      if (closeStatus) {
        this.newBook.save();
        this.set("model.book", this.newBook);
      } else {
        this.newBook.rollbackAttributes();
      }
    }
  }
});
