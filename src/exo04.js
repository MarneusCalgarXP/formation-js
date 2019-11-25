import { Writable } from "stream";

export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  var val = obj[prop];
  Object.defineProperty(obj, prop, {
    get : function() {
      getter();
      return val;
    },
    set : function(x) {
      setter();
      val = x;
    },
  })
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  Object.keys(obj).forEach(function(prop) {
    let enumerable = (! prop.startsWith("_"));
    let mutable = (! /^[A-Z]/.test(prop));
    Object.defineProperty(obj, prop, {
      'enumerable' : enumerable,
      'writable' : mutable,
      'configurable' : mutable
    });
  });

}