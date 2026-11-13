// paint-worker.js: runs the texture painters off the page's main thread (bundled to /js/forest-paint.js).
// Receives { i, job: [painter name, ...args] }, replies { i, pk } with the pixel buffer transferred.
import * as P from "./paint.js";

self.onmessage = ({ data: { i, job } }) => {
  try {
    const pk = P[job[0]](...job.slice(1));
    self.postMessage({ i, pk }, [pk.data.buffer]);
  } catch (e) {
    self.postMessage({ i, error: String(e) });
  }
};
