import { isBlank } from '@ember/utils';

export function isEmpty(params) {
  return isBlank(params[0]);
}
