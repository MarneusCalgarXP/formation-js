export const range = (start, end) => ({
  // retourner un itérable itérant entre les deux bornes numériques
  
    [Symbol.iterator]: function*() {
      let i = start;
      while (i <= end) yield i++;
    }
  
  });

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
