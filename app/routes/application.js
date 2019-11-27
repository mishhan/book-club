import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model() {
    return hash({
      books: this.store.findAll("book"),
      speakers: this.store.findAll("speaker"),
      reports: this.store.findAll("report"),
      meetings: this.store.findAll("meeting")
    });
  }
});
