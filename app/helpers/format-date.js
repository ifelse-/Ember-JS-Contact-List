import Ember from 'ember';

export function formatDate() {
	return moment().format('MMM Do YYYY');
}

export default Ember.Helper.helper(formatDate);