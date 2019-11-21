import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | book-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders attributes', async function(assert) {
    const book = getBooks().book;
    this.set('book', book);
    await render(hbs`{{book-listing book=this.book}}`);

    assert.equal(this.element.querySelector('img').src, book.image, 'image is set');
    assert.equal(this.element.querySelector(`.name`).textContent, book.name, 'name is set');
    assert.equal(this.element.querySelector(`.author`).textContent, book.author, 'author is set');
    assert.equal(this.element.querySelector(`.page-count`).textContent, book.pageCount, 'page count is set');
    assert.equal(this.element.querySelector(`.link`).href, book.link, 'download link is set');
  });

  test(`it renders default image if there's no image`, async function(assert) {
    const book = getBooks().bookWithOutImage;
    const defalutLink = "assets/book.jpg";
    this.set('book', book);
    await render(hbs`{{book-listing book=this.book}}`);

    assert.ok(this.element.querySelector('img').src.endsWith(defalutLink), 'if no image is provided default link is set')
  });

  function getBooks() {
    const book = {
      id: 1,
      name: 'Lord of the rings',
      author: 'Tolkien',
      pageCount: '1000',
      image: 'https://www.imdb.com/title/tt0120737/',
      link: 'https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDM3499224&R=3499224'
    };

    const bookWithOutImage = {
      id: 2,
      name: 'Lord of the rings',
      author: 'Tolkien',
      pageCount: '1000',
      link: 'https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDM3499224&R=3499224'
    };

    return { book: book, bookWithOutImage: bookWithOutImage };
  }
});
