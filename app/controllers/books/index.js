import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({

  books: computed.alias('model'),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  sortDefinition: ['reports.length:desc', 'name:asc', 'scaledRating:desc'],
  sortedBooks: computed.sort('books', 'sortDefinition'),

  actions: {
    deleteBook(book) {
      book.destroyRecord();
    }
  }
});
