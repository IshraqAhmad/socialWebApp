import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {
  name: [validatePresence(true), validateLength({ min: 3, max: 40 })],
  email: [validatePresence(true), validateLength({ min: 3, max: 40 })],
  gender: [validatePresence(true), validateLength({ min: 3, max: 40 })],
  status: [validatePresence(true), validateLength({ min: 3, max: 40 })],
};
