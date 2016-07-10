<template>
  <div class="widget">
    <h2>This is a Vue component</h2>
    <div>Hello {{name}}!</div>
    <input v-model="name" placeholder="Enter your name" />
    <div>
      You've pressed the button {{counter}} times (inside vue component).
    </div>

    <hr />

    <div>
      <button @click="toggleShowBlaze">Toggle embed Blaze template</button>
      <button @click="toggleBlazeTemplate">Switch template</button>
    </div>

    <div class="blaze-template" v-if="showBlaze" v-blaze="blazeTemplate"></div>
  </div>
</template>

<script>
import {Session} from 'meteor/session';

export default {
  data() {
    return {
      name: 'world',
      counter: 0,
      blazeTemplate: 'hello',
      showBlaze: true
    }
  },
  meteor: {
    data: {
      counter() {
        return Session.get("counter");
      }
    }
  },
  methods: {
    toggleBlazeTemplate() {
      if(this.blazeTemplate === 'hello') {
        this.blazeTemplate = 'loginButtons';
      } else {
        this.blazeTemplate = 'hello';
      }
    },
    toggleShowBlaze() {
      this.showBlaze = !this.showBlaze;
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

h2 {
  margin: 0 0 12px 0;
  font-weight: normal;
  text-align: center;
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

.blaze-template {
  margin-top: 12px;
  padding: 12px;
  background: white;
  border-radius: 3px;
}
</style>
