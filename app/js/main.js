// myContacts is a new new instance of the backbonejs constructor ContactCollection created in contact.collection.js.

var myContacts = new ContactCollection();

//because myContacts is an instance of ContactCollection, which has a url parameter on it linking it to our heroku sever, we can perfrom actions like get(), post(), fetch(), etc.

myContacts.fetch().done( function () {

  myContacts.each(function (model) {
    appendContactToPage(model.attributes);
  });

});

var newContact = function (e) {

  e.preventDefault();

  // dom variables

  var contactFirstName = $(this).find('#firstName').val(),
      contactLastName  = $(this).find('#lastName').val(),
      contactEmail     = $(this).find('#emailAddress').val(),
      contactPhone     = $(this).find('#phoneNumber').val(),
      contactTwitter   = $(this).find('#twitterName').val(),
      contactFullName  = contactFirstName + ' ' + contactLastName;

  // new instance of contact with values equal to our input variables

  var c = new Contact({
    name: contactFullName,
    email: contactEmail,
    phone: contactPhone,
    twitter: "@" + contactTwitter
  });

  myContacts.add(c).save().success( function (contactData) {
    appendContactToPage(contactData);
  });

  this.reset();
};

var appendContactToPage = function(x) { 

  var contactHtml = template.contact(x);

  $('.contactList').prepend(contactHtml);

};

// listener for form submission
$('#newContact').on('submit', newContact);

$('#deleteContact').on('click', function(){
    
  var models = myContacts.models;

  var liId = _.filter(models, function (x) {
  });
});




