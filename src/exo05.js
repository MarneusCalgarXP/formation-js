const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export const instructions = [];

// TOFIX: imprimer la chanson correctement
for (var i = 0; i < paroles.length; i++) {

  instructions.push(function(x) {
    return function() {
      return paroles[x] + ", " + paroles[x];
    }
  }(i));

}

// code de test, à essayer en console pour voir le problème
/*instructions.forEach(function (printNextLine) {
  console.log(printNextLine());
});*/