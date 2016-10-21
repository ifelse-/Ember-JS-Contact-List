import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
       addContact: function(){
       	  var self = this;
       	  var newContact = this.store.createRecord('contact', {
       	  firstName: this.get('firstName'),
				  lastName: this.get('lastName'),
				  jobTitle: this.get('jobTitle'),
				  company: this.get('companyName'),
				  birthday: this.get('birthday'),
				  picture: this.get('picture'),
				  email: this.get('emailAddress'),
				  phone: this.get('phoneNumber')
       	  });

       	      newContact.save();

       	      self.transitionToRoute('contacts');

       }
    }
});
