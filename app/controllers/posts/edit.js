import Controller from '@ember/controller';
import PostValidations from 'ember-demo/validation/post';
import { action } from '@ember/object';

export default class PostEditController extends Controller {
  PostValidations = PostValidations;

  @action
  submit(model) {
    console.log('submit', model);
  }
}
