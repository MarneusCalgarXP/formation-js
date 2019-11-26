export function PubSub() {
  this.events = new Map()
}

PubSub.prototype.on = function(event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`

  /*if (! this.events.has(event)) {
    this.events.set(event, []);
  }
  var eventListeners = this.events.get(event);
  eventListeners.push(callback);*/

  this.events.set(event, 
    [].concat(this.events.get(event), callback)
      .filter(c => typeof(c) === 'function')
  );

};

PubSub.prototype.emit = function(event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`

  /*var eventListeners = [];
  if (this.events.has(event)) {
    eventListeners = this.events.get(event);
  }
  if (this.events.has('*')) {
    eventListeners = eventListeners.concat(  this.events.get('*') );
  }
  eventListeners.forEach(callback => {
    callback(data);
  });*/

  [].concat( this.events.get(event) )
    .concat( this.events.get('*') )
    .filter(c => typeof(c) === 'function')
    .forEach(callback => callback(data));
};

PubSub.prototype.off = function(event, callback) {
  if (this.events.has(event)) {
    var eventListeners = this.events.get(event);
    var newlisteners = eventListeners.filter(c => c !== callback);
    this.events.set(event, newlisteners);
  }
}

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
