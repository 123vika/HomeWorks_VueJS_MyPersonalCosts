<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.tytle]">My Personal Cost</div>
      </header>
      <button :class="[$style.newCostBtn]" @click="showFlag = !showFlag">ADD NEW COST +</button>
      <div :class="[$style.content]">
        <payments-display :list="paymentsList"/>
      </div>

      <div>
        <add-payment-form v-show="showFlag" @addNewPayment="addData"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data() {
    return {
      paymentsList: [] ,
      showFlag: 0,
    }
  },
 
  methods: { 
    addData(newPayment) {
      console.log(newPayment);
      this.paymentsList.push(newPayment);
    },
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
      ]
    }
  },
  created() {
    this.paymentsList = this.fetchData();
  },
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: block;
  height: 100%;
}
.tytle {
  font-size: 20px;
}
.content {
  padding-top: 30px;
  margin-bottom: 20px;
}

.newCostBtn {
  margin-top: 20px;
  background-color: darkcyan;
}

td, th {
  width: 25%;
  border-bottom: 1px solid gray;
  padding: 15px;
  text-align: left;
}

</style>
