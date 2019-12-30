import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('books', function () {
    this.route('edit', { path: '/:book_id' });
    this.route('new');
  });
  this.route('speakers', function () {
    this.route('edit', { path: '/:speaker_id' });
    this.route('new');
  });
  this.route('reports', function () {
    this.route('edit', { path: '/:report_id' });
    this.route('new');
  });
  this.route('meetings', function() {
    this.route('edit', { path: '/:meeting_id'});
    this.route('new');
  });
});

export default Router;
