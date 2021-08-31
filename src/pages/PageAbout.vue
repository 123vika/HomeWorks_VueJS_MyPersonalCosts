<template>
  <div>About
    <br>
    <button @click="showAuthFormFn">Auth</button>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      
    }
  },
  methods: {
    showAuthFormFn() {
      this.$modal.show('auth', {header: "Auth Form"});
      this.showPaymentForm = true;
    },
  },
  
};
</script>



