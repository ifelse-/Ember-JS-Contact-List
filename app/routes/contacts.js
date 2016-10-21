import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    return this.store.findAll('contact');
   },
    setupController(controller,model){
    this._super.apply(this, arguments);
    controller.set('selectedObject',model.get('firstObject'));
  }
});
