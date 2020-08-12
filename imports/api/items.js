import {Mongo} from 'meteor/mongo';
import './methods.js';

export const Items = new Mongo.Collection('items');

if(Meteor.isServer){
	Meteor.publish('allItems', function(){
		return Items.find({});
	})
}