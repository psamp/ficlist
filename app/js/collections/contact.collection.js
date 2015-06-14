var contactCollection = Backbone.collection.extend({
  model: Contact,
  url: 'http://tiy-515.herokuapp.com/collections/psamp-contacts'
});