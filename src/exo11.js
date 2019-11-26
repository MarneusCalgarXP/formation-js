export function deduplicateArray(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // 1 - avec les méthodes filter et indexOf
  
  //return arr
  //  .filter((item, index) => arr.indexOf(item) === index) ;
  
  // 2 - avec un Set et l'opérateur spread
  return [...new Set(arr)];
  
}

export function getPropertyFromValue(obj, val) {
  // TODO: retourner la clé de la propriété de obj ayant comme valeur val
  // 1 - avec les méthodes find et Object.keys

  // return Object.entries(obj)
  //   .find(e => e[1] === val)
  //   [0];

  // 2 - avec une Map et Object.entries

  var m = new Map( Object.entries(obj).map(e => e.reverse() ));
  return m.get(val);
  /*
  var m = new Map( Object.entries(obj)));
  var resultkey;
  m.forEach((mval, cle) => {
    if (mval === val) {
      resultkey = cle;
    }
  });
  return resultkey;*/

}
