import Route from '@ember/routing/route';

export default class PostsIndexRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
      replace: true,
    },
  };

  async model(params) {
    let response = await fetch(
      'https://gorest.co.in/public/v1/posts?page=' + params.page
    );
    let result = await response.json();
    return result;
  }
}
