import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  actions: {
    deleteBook(book) {
      this.deleteBook(book);
    }
  }
});
