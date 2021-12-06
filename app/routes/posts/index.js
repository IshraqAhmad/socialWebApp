import Route from '@ember/routing/route';

export default class PostsIndexRoute extends Route {
  async model() {
    let response = await fetch('https://gorest.co.in/public/v1/posts');
    let result = await response.json();
    let posts = result.data;
    return posts;
  }
}
