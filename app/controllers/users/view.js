import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import environment from 'ember-demo/config/environment';

export default class UsersViewController extends Controller {
  @tracked post = null;
  @tracked todo = null;
  @tracked comments = null;

  @action
  async setPost(post) {
    this.post = post;
    let response = await fetch(
      environment.apiURL + 'posts/' + post.id + '/comments'
    );
    let result = await response.json();
    this.comments = result.data;
  }

  @action
  setTodo(todo) {
    this.todo = todo;
  }
}
