import Controller from '@ember/controller';
import UserValidations from 'ember-demo/validation/users';
import { action } from '@ember/object';

export default class UsersEditController extends Controller {
  UserValidations = UserValidations;

  @action
  submit(model) {
    console.log('submit', model);
  }
}
