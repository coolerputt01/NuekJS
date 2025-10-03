function reactive(obj, callback) {
  return new Proxy(obj, {
    set(target, key, value) {
      target[key] = value;
      callback(target);
      return true;
    }
  });
}
export default reactive;