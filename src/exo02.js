// retourne true si l'objet a une propriété ayant comme clé key
export function hasProperty(obj, key) {
  return obj != null && key != null && obj.hasOwnProperty(key);
}

// retourne true si l'objet a une propriété ayant comme valeur value
export function hasPropertyValue(obj, value) {
  return obj != null && value != null && Object.values(obj).includes(value);
}

// retourne le nombre de propriétés d'un objet (note: sans compter les propriétés déléguées)
export function getNumberOfProperties(obj) {
  return obj == null ? 0 : Object.keys(obj).length;
}
