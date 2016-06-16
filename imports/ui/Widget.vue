<template>
  <div class="widget">
    <div>Hello {{name}}!</div>
    <input v-model="name" placeholder="Enter your name" />
    <div>
      You've pressed the button {{counter}} times (inside vue component).
    </div>
  </div>
</template>

<script>
import {Session} from 'meteor/session';

export default {
  data() {
    return {
      name: 'world',
      counter: 0
    }
  },
  meteor: {
    data: {
      counter() {
        return Session.get("counter");
      }
    }
  }
}
</script>

<style scoped>
.widget {
  background: #a0ddc4;
  padding: 12px;
  border-radius: 3px;
  width: 300px;
  border-bottom: solid 1px #40b883;
}

input {
  display: block;
  margin: 4px 0;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 6px 12px;
  border-radius: 3px;
}
</style>
