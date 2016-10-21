import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  firstName: attr(),
  lastName: attr(),
  jobTitle: attr(),
  company: attr(),
  birthday: attr('date'),
  picture: attr(),
  email: attr(),
  phone: attr()
});
