<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button @custom-event-1="customEvent1" @custom-event-2="customEvent2" />
    <button @click="toggleModal">Show/Hide</button>
    <button @click="addLink">Add Link</button>
    <button @click="removeLink">Remove Link</button>

    <teleport to="#modal">
      <transition name="fade">
        <modal v-if="showModal">
          <p>Hello from hello world component</p>
          <button @click="showModal = false">Hide</button>
        </modal>
      </transition>
    </teleport>
    <div>
      {{ user }}
    </div>
    <login-form v-model:password="password" v-model:username="username"/> 
    <div>{{ username }} - {{ password }}</div>

    <div>
      <test-comp text="Some text"/>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import LoginForm from './LoginForm.vue';
import Modal from "./Modal.vue";
import TestComp from './testComp.vue';
export default {
  name: "HelloWorld",
  components: { Button, Modal, LoginForm, TestComp},
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: false,
      user: {
        name: 'Vasya',
        isAdmine: false
      },
      password: '',
      username: ''
    };
  },
  methods: {
    customEvent1(data) {
      console.log("custom-event-1", data);
    },
    customEvent2(data) {
      console.log("custom-event-2", data);
    },
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    },
    addLink() {
      this.user.link = "https://gb.ru";
      console.log(this.user.link);
    },
    removeLink() {
      delete this.user.link;
      console.log(this.user.link);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
