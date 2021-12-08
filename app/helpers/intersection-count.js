/* eslint ember/avoid-leaking-state-in-ember-objects: 0 */
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function intersectionCount([a, b] /*, hash*/) {
  if (!isArray(a) || !isArray(b) || isEmpty(a) || isEmpty(b)) {
    return 0;
  }

  if (a.length > b.length) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  let count = 0;
  a.forEach((item) => {
    if (b.includes(item)) {
      count++;
    }
  });

  return count;
}
