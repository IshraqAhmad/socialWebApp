import Service from '@ember/service';
import environment from 'ember-demo/config/environment';

export default class UserService extends Service {

    async model() {
        const response = await post(
            environment.apiURL + 'users/' + this.model.user.id + '/posts'
        );
        const result = await response.json();
        return result;
      }


}
