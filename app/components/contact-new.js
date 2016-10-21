import Ember from 'ember';

export default Ember.Component.extend({

	store: Ember.inject.service(),
    actions:{
       addContact: function(){

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
       	      this.send('closePanel');


       },
       closePanel: function(){
           var hidden = $('.slide-panel');
		    if (hidden.hasClass('visible')){
		        hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
		    } else {
		        hidden.animate({"left":"0px"}, "slow").addClass('visible');
		    }
       }
    }
});
