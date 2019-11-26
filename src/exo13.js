// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // TODO: retourner une fonction appelant fn mais
  // retournant une Promise au lieu de passer un callback
  return (...args) => {
    return new Promise((resolve, reject) => {
        const callback = (err, result) => {
          return (err)
            ? reject(err)
            : resolve(result);
        }

        fn(callback, ...args);
       // resolve();
    });
  }
}

// exemple d'utilisation
const wait = promisify(setTimeout);
wait(2000)
  .then(() => console.log("1") && wait(2000))
  .then(() => console.log("2") && wait(2000))
  .then(() => console.log("3"));
