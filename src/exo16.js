export function Person(first, name) {
  // TODO: assigner first et name comme propriétés propres
  Object.assign(this, {
    first : first,
    name : name
  });
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // TODO: appeler le constructeur Person avec le bon contexte d'éxécution
  Person.call(this,first, name);
  // TODO: assigner rights comme propriété propre
  this.rights = rights;
  return this;
}

// TODO: définir Person.prototype comme prototype de User.prototype

Object.setPrototypeOf(User.prototype, Person.prototype);

Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);
