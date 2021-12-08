import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostsComponent extends Component {
  @action
  onOpen() {
    this.args.setPost(this.args.post);
  }

  onOpenComment() {
    this.args.setComment(this.args.comment);
  }
}
