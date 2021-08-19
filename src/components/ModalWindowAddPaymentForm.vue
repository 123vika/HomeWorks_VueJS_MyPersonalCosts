<template>
  <div class="wrapper">
    <div class="header">{{ modalSettings.header }}</div>
    <div class="content">
      <add-payment-form v-if="modalSettings.name === 'addPayment'"/>
      <auth v-if="modalSettings.name === 'auth'"/>
    </div>
    <div class="footer">
      <button @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import Auth from './Auth.vue';
export default {
  name: 'ModalWindowAddPaymentForm',
  components: { AddPaymentForm, Auth },
  props: {
    modalSettings: Object
  },
  methods: {
    onClose() {
      this.$modal.hide();
    }
  },
};
</script>

<style lang="scss"> 
.wrapper {
  position: absolute; 
  top: 20%;
  padding: 20px;
  background: #efefef;  
}
</style>

