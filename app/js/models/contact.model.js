var Contact = Backbone.Model.extend ({

  initialize: function () {
    this.logName();
  },

  idAdttribtue: '_id',

  defaults: {
    name:'',
    email: '',
    phone: '',
    twitter: '@' + ''
  },

  logName: function () {
    console.log(this.get('name'));
    // console.log(this.get('email'));
    // console.log(this.get('phone'));
    // console.log(this.get('twitter'));
  }

});