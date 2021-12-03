import Route from '@ember/routing/route';

export default class UsersEditRoute extends Route {
  async model(params) {
    let response = await fetch(
      'https://gorest.co.in/public/v1/users/' + params.userid
    );
    let result = await response.json();
    let user = result.data;
    return user;
  }
}
