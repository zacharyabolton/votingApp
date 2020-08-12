import {Template} from 'meteor/templating';
import './item.html';

import {Items} from '../api/items.js';

Template.item.events({
	'click .vote-one'(event){
		Meteor.call('voteOneItem', 'itemOne', this._id);
	},
	'click .vote-two'(event){
		Meteor.call('voteOneItem', 'itemTwo', this._id);
	}
})