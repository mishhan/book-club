import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model() {
    return hash({
      books: this.store.findAll("book"),
      reports: this.store.findAll("report"),
      speaker: this.store.findAll("speaker")
    });
  },

  setupController(controller, model) {
    const { books } = model;

    this._super(controller, books);
  }
});
