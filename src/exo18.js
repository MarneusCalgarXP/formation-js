export const range = (start, end) => {

  let data = [];
  for (let i = start ; i <= end; i++) {
      data.push(i);
  }
  
  return {
    [Symbol.iterator]: function*() {
      while(data.length) yield data.shift(); 
    }
  }
  // retourner un itérable itérant entre les deux bornes numériques
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
