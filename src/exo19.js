export const addAliasForProperties = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // de déclarer des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet

  return new Proxy(object, {
    get(obj, prop) {
      if (obj.hasOwnProperty(prop)) {
        return Reflect.get(obj, prop);
      }
      if (alias.hasOwnProperty(prop)) {
        return Reflect.get(obj, alias[prop]);
      }
      return undefined;
    }
  });
};

// exemple d'utilisation:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "first" }
);
console.log(`${user.firstName} ${user.lastName}`); // Rick Sanchez

export const countFunctionCalls = fn => {
  // TODO: retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // stocké dans la propriété fn.count
  let counter = 0;
  return new Proxy(fn, {
    apply(o, context, args) {
      counter++;
      return o.apply(context, args);
    },
    get(obj, prop) {
      if (prop === 'count') {
        return counter;
      }
      return undefined;
    }
  });
};

// exemple d'utilisation:
const fn = countFunctionCalls(n => n * 2);
fn(1);
fn(2);
fn(999);
console.log(fn.count); // 3
