<template>
  <div class="wrapper">
    <div class="header">{{ modalSettings.header }}</div>
    <div class="content">
      <!-- <add-payment-form v-if="modalSettings.name === 'addPayment'"/>
      <auth v-if="modalSettings.name === 'auth'"/>
      <add-category v-if="modalSettings.name === 'addCategory'"/> -->
      <component :is="modalSettings.name" />
    </div>
    <div class="footer">
      <button @click="onClose">Close</button>
    </div>
  </div>
</template>  

<script>
export default {
  name: 'ModalWindowAddPaymentForm',
  components: { 
    AddPaymentForm: () => import(/*webpackChunkName: "AddPaymentForm"*/'./AddPaymentForm.vue'), 
    Auth: () => import(/*webpackChunkName: "Auth"*/'./Auth.vue'), 
    AddCategory: () => import(/*webpackChunkName: "AddCategory"*/'./AddCategory.vue') 
    },
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

