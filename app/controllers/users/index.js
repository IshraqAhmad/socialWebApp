import Controller from '@ember/controller';

export default class UsersIndexController extends Controller {
  queryParams = ['page'];
  page = 1;
}
