import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model(params) {
    return hash({
      report: this.store.findRecord('report', params.report_id),
      speakers: this.store.findAll('speaker'),
      books: this.store.findAll('book')
    });
  },

  setupController(controller, model) {
    const { report, speakers, books } = model;
    this._super(controller, report);

    controller.set('speakers', speakers);
    controller.set('books', books);
  }
});
