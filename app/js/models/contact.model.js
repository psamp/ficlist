var Contact = Backbone.Model.extend ({

  initialize: function () {
    this.logInfo();
  },

  idAdttribtue: '_id',

  defaults: {
    first:'',
    last: '',
    email: '',
    phone: '',
    twitter: "@" + ''
  },

  logInfo: function () {
    console.log(this.get('first'));
    console.log(this.get('last'));
    console.log(this.get('email'));
    console.log(this.get('phone'));
    console.log(this.get('twitter'));
  }

});