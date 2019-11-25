// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  
  let newobject = {};
  /*if (obj) {
    for (let prop in obj ) {
      let val = obj[prop];
      console.log("test 3 for - : ", prop, val);
      newobject[val] = prop;
    }
  }*/

  Object.entries(obj).forEach(function(a) { 
    let b = a.reverse();
    Object.assign(newobject, { [b[0]] : b[1] } );
    //Object.assign(newobject, b );
  });
  //console.log("test 3 keys : ", keys);
  
  return newobject;

 /* console.log("test 3 input : ", obj);
  var result =  Object.entries(obj);
  for(let a in result) {
    console.log(" - ", a, result[a]);
  }
  
  /*.map(function(x){
    return x.reverse();
  });*/
  /*console.log("test 3 output : ", result);
  return result;*/
}
