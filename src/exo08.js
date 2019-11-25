// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count(...args) {
    return args.reduce((o, e) => {
      o[e] = (o.hasOwnProperty(e))
        ? o[e] + 1
        : 1;
        return o;
    },
    {});
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte")
// { Carotte: 2, Chou: 3, Patate: 1 }


// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
  var counter = count(...args);
  /*var max = { freq : -1, term : ''}; 
 
  for (let prop in counter) {
    let val  = counter[prop];
    if (val > max.freq) {
      max.freq = val;
      max.term = prop;
    }
  }
  return max.term;*/

  var maxValue = Math.max(...Object.values(counter));
  var maxEntry = Object.entries(counter).find(e => e[1] === maxValue);
  return maxEntry[0];
}

// exemple d'utilisation:
mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") === "Chou"