// Extend Backbone's collection with a new one for our contacts, using our Contact model and the url for our server.

var ContactCollection = Backbone.Collection.extend ({

  model: Contact,
  
  url: 'http://tiy-515.herokuapp.com/collections/psamp-contacts'

});