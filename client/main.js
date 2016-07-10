import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './main.html';

Session.setDefault("counter", 0);


Template.hello.helpers({
  counter() {
    return Session.get("counter");
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter")+1);
  },
});


/* Vue-demo */

import {Vue} from 'meteor/akryum:vue';
import Widget from '/imports/ui/Widget.vue';
import NavBar from '/imports/ui/NavBar.vue';

Template.vue_demo.rendered = function() {
  var vm = new Vue({
    el: '#vue-demo',
    template: '<div><widget></widget><nav-bar></nav-bar></div>',
    components: {
      Widget,
      NavBar
    }
  });
}
