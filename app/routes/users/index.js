import Route from '@ember/routing/route';

export default class UsersIndexRoute extends Route {
  async model() {
    const response = await fetch('https://gorest.co.in/public/v1/users');
    const result = await response.json();
    const users = result.data;
    return users;
  }
}
