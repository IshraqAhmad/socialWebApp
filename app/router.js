import EmberRouter from '@ember/routing/router';
import config from 'ember-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '' });
  this.route('users', function () {
    this.route('view');
    this.route('edit');
  });
  // Catch-all error page, put your routes above this one
  this.route('not-found', { path: '/*path' });
});
