import Route from '@ember/routing/route';

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
      'https://gorest.co.in/public/v1/users?page=' + params.page
    );
    const result = await response.json();
    result.headers = this.headers;
    return result;
  }
}
