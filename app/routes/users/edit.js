import Route from '@ember/routing/route';
import environment from 'ember-demo/config/environment';

export default class UsersEditRoute extends Route {
  async model(params) {
    let response = await fetch(environment.apiURL + 'users/' + params.userid);
    let result = await response.json();
    let user = result.data;
    return user;
  }
}
