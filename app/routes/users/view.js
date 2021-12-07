import Route from '@ember/routing/route';
import environment from 'ember-demo/config/environment';

export default class UsersViewRoute extends Route {
  async model(params) {
    let response = await fetch(environment.apiURL + 'users/' + params.userid);
    let result = await response.json();
    let user = result.data;
    response = await fetch(
      environment.apiURL + 'users/' + params.userid + '/posts'
    );
    result = await response.json();
    let posts = result.data;
    response = await fetch(
      environment.apiURL + 'users/' + params.userid + '/todos'
    );
    result = await response.json();
    let todos = result.data;
    return { user: user, posts: posts, todos: todos };
  }
}
