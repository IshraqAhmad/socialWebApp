export function isIn([values, item]) {
  if (!values) {
    return false;
  }

  if (!item) {
    return false;
  }

  return values.includes(item);
}
