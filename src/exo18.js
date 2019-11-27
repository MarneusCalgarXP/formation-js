export const range = (start, end) => {

  return {
    [Symbol.iterator]: function*() {
      let i = start;
      while (i <= end) yield i++;
    }
  }
  // retourner un itérable itérant entre les deux bornes numériques
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
