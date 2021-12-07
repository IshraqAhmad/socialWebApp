import Route from '@ember/routing/route';
import environment from 'ember-demo/config/environment';

export default class TodoIndexRoute extends Route {
  async model() {
    let response = await fetch(environment.apiURL + 'todos');
    let result = await response.json();
    return result;
  }
}
