/*
  Tiny module-level signal connecting the Loader to entrance animations:
  the hero and scroll reveals hold their choreography until the loader
  starts its exit, so reveals play under the splitting curtain instead
  of finishing hidden behind it. Module state lives per full page load,
  same lifetime as the loader's own replay guard.
*/
let done = false;
const subscribers = new Set<() => void>();

export function markLoaderDone() {
  if (done) return;
  done = true;
  subscribers.forEach((cb) => cb());
  subscribers.clear();
}

export function onLoaderDone(cb: () => void) {
  if (done) {
    cb();
    return () => {};
  }
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}
