# Meteor, Vue & Blaze example

Example meteor project featuring both vue and blaze ([more info](https://github.com/Akryum/meteor-vue-component)).

## Steps to reproduce

Open a terminal and type:

    meteor create my-app
    cd ./my-app
    meteor add akryum:vue akryum:vue-component
    meteor

Add a div in your blaze template:

```html
<template name="vue_demo">
  <div id="vue-demo"></div>
</template>
```

And create a vue instance in your client script:

```javascript
/* Vue-demo */

import {Vue} from 'meteor/akryum:vue';
import Widget from '/imports/ui/Widget.vue';

Template.vue_demo.rendered = function() {
  var vm = new Vue({
    el: '#vue-demo',
    template: '<div><widget></widget></div>',
    components: {
      Widget
    }
  });
}
```
