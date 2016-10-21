import Ember from 'ember';

export default Ember.Controller.extend({
	title: 'My Contact List',
    filter: '',
    filteredContacts: function(){
    	var filter = this.get('filter');
    	var rx = new RegExp(filter, 'gi');
    	var contacts = this.model;

    	return contacts.filter(function(contact){
             return contact.get('firstName').match(rx) || contact.get('lastName').match(rx);
    	});
    }.property('arrangedContent', 'filter'),  
	sortedProperties:['firstName:asc'],
	sortedContacts: Ember.computed.sort('model', 'sortedProperties'),
	selectedObject: undefined,
	   actions: {
            updateSelectedObject(item){
            this.set('selectedObject',item);
         },
            openPanel: function() {
              var hidden = $('.slide-panel');
                if (hidden.hasClass('visible')){
                    hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
                } else {
                    hidden.animate({"left":"0px"}, "slow").addClass('visible');
                }
            }
      }
});
