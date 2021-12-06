import Route from '@ember/routing/route';

export default class UsersIndexRoute extends Route {
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
    return result;
  }
}
