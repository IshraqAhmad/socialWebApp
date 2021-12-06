import Route from '@ember/routing/route';

export default class TodoIndexRoute extends Route {
  async model() {
    let response = await fetch('https://gorest.co.in/public/v1/todos');
    let result = await response.json();
    return result;
  }
}
