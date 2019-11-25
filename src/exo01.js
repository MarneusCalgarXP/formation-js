// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  return (
    [undefined, null].includes(x) || !["function", "object"].includes(typeof x)
  );
}
