import Route from '@ember/routing/route';
import environment from 'ember-demo/config/environment';

export default class UsersIndexRoute extends Route {
  headers = ['Username', 'Email', 'Gender', 'Status'];
  queryParams = {
    page: {
      refreshModel: true,
      replace: true,
    },
  };

  async model(params) {
    const response = await fetch(
      environment.apiURL + 'users?page=' + params.page
    );
    const result = await response.json();
    result.headers = this.headers;
    return result;
  }
}
