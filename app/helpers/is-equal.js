import { isBlank } from '@ember/utils';

export function isEqual(params) {
  const validate = isBlank(params) || isBlank(params[0]) || isBlank(params[1]);

  return validate ? false : params[0] === params[1];
}
