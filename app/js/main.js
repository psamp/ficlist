// myContacts is a new new instance of the backbonejs constructor ContactCollection created in contact.collection.js.

var myContacts = new ContactCollection();

//because myContacts is an instance of ContactCollection, which has a url parameter on it linking it to our heroku sever, we can perfrom actions like get(), post(), fetch(), etc.

myContacts.fetch().done(function (model) {
  appendContactToPage(model.attributes);
});

var newContact = function (e) {

  e.preventDefault();

  var contactFirstName = $(this).find('#firstName').val(),contactLastName    = $(this).find('#lastName').val(),contactEmail       = $(this).find('#emailAddress').val(),contactPhone       = $(this).find('#phoneNumber').val(),       contactTwitter     = $(this).find('#twitterName').val();

  var contactFullName = contactFirstName + ' ' + contactLastName;

  var contact = new Contact({
    name: contactFullName,
    email: contactEmail,
    phone: contactPhone,
    twitter: "@" + contactTwitter
  });

  allStudents.add(contact).save().success(function (contactData) {
    appendContactToPage(contactData);
  });

  this.reset();

};

var appendContactToPage = function(param) { 

  var contactHtml = template.contact(param);

  $('#contactList').prepend(contactHtml);

};

$('#newContact').submit(newContact);