import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UsersViewController extends Controller {
  @tracked post = null;

  @action
  setPost(post) {
    this.post = post;
  }
}