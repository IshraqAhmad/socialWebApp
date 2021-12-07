import Route from '@ember/routing/route';
import environment from 'ember-demo/config/environment';

export default class PostsIndexRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
      replace: true,
    },
  };

  async model(params) {
    let response = await fetch(
      environment.apiURL + 'posts?page=' + params.page
    );
    let result = await response.json();
    return result;
  }
}
