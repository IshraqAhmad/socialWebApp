import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user', function (hooks) {
  setupApplicationTest(hooks);


  hooks.beforeEach(async function () {
    const userObject = {
      id: 100,
    };
    // await setupAuthentication(userObject);
  });

  test('visiting /user', async function (assert) {
    await visit('/user');

    assert.equal(currentURL(), '/user');
  });

  test('can search for users', async function (assert) {
    this.createList('user', 20, { email: 'user@example.edu' });
    this.createList('authentication', 20);

    const userSearch = '.user-search input';
    const secondResult = '.user-search .results li:nth-of-type(3)';
    const secondResultUsername = `${secondResult} .name`;
    const secondResultEmail = `${secondResult} .email`;
    const name = '.user-display-name';

    await visit('/users/100');
    await fillIn(userSearch, 'son');
    await triggerEvent(userSearch, 'keyup');
    assert.dom(secondResultUsername).hasText('John Doe', 'user name is correct');
    assert.dom(secondResultEmail).hasText('john@example.com', 'user email is correct');

    await click(secondResultUsername);
    assert.strictEqual(currentURL(), '/users/2', 'new user profile is shown');
    assert.dom(name).hasText('John Doe', 'user name is shown');
  });

});
