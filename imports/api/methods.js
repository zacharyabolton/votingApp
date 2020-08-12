import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Items} from '../api/items.js';

Meteor.methods({
	createNewItem(itemOne, itemTwo){
		check(itemOne, String);
		check(itemTwo, String);
		Items.insert({
			itemOne: {
				text:itemOne,
				value:0
			},
			itemTwo: {
				text:itemTwo,
				value:0
			}
		});
	},
	voteOneItem(which, id) {
		check(which, String);
		check(id, String);
		let date = new Date();

		if(which === 'itemOne'){
			Items.update(id, {
				$inc: {'itemOne.value': 1},
				$set: { lastUpdated: date }
			});
		} else {
			Items.update(id, {
				$inc: {'itemTwo.value': 1},
				$set: { lastUpdated: date }
			});
		}
	}
});