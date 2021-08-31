<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div
    class="my-div"
    id="my-div"
    style="border: 1px solid #000; min-heigh: 50px; margin: 10px 0"
  ></div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</div>
  
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
