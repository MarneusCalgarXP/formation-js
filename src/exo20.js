import data from "../__tests__/fakedata.json";

export const query = array =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
      return query(this.filter(e => {
        return condition.call(this, e[key]); 
      }));
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
      //return this.
      let sortedValues = this.map(e => e[key]).sort();
      let items = sortedValues.map(val => this.filter(e => e[key] === val));
      let result = [];
      items.forEach(subar =>  result.push(...subar));
      return query(result);
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
      return query(this.slice(0, number));
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", n => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map(user => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
