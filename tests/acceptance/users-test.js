import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | users', function (hooks) {
  setupApplicationTest(hooks);



  hooks.beforeEach(async function () {
    //
  });

  test('visiting /users', async function (assert) {
    await visit('/users');

    assert.equal(currentURL(), '/users');
  });

  // test('can see list of users and transition to user route', async function (assert) {
  //     // 
  // });

  // test('can page through list of users', async function (assert) {
  //   //
  // });

  // test('can search for a user and transition to user route', async function (assert) {
      //
  // });

});
