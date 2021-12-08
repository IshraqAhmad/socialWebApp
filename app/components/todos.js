import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TodosComponent extends Component {
  @action
  onOpen() {
    this.args.setTodo(this.args.todo);
  }
}
