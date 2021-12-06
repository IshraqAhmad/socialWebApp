import Controller from '@ember/controller';

export default class PostsIndexController extends Controller {
  queryParams = ['page'];
  page = 1;
}
