import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ActionsIndex } from '../actions-index';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'keyup .js-search'(event, instance) {
    const searchString = event.target.value || '';
    ActionsIndex.search(searchString, { limit: 15 });
  }
});
