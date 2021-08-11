<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.tytle]">My Personal Cost</div>
      </header>
      <button :class="[$style.newCostBtn]" @click="showFlag = !showFlag">
        ADD NEW COST +
      </button>
      <div>
        <add-payment-form
          :class="[$style.form]"
          v-show="showFlag"
          @addNewPayment="addData"
        />
      </div>
      <div :class="[$style.content]">
        Total Value: {{ getFPV }}
        <payments-display :class="[$style.list]" :list="currentElements" />
        <button @click="onLoadNextPage">Load next page</button>
      </div>
      <pagination :cur="cur" :n="n" :length="paymentsList.length" @changePage="onChangePage"/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data() {
    return {
      showFlag: 0,
      cur: 1,
      n: 5,
      numOfPage: 1,
    };
  },

  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),
    ...mapActions([
      "fetchData",
    ]),
    addData(newPayment) {
      console.log(newPayment);
      this.addDataToPaymentList(newPayment);
    },
    onChangePage(page) {
      console.log(page);
      this.cur = page
    },
    onLoadNextPage(){
      this.numOfPage = this.numOfPage +1
      this.$store.dispatch('fetchData', this.numOfPage);
    }
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
      
      }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const { n, cur } = this;
      return this.paymentsList.slice(n * (cur - 1), n * (cur - 1) + n);
    },
  },
  created() {
    this.$store.dispatch('fetchData', this.numOfPage);
    console.log(this.paymentsList);  
  },
};
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
  margin: 20px;
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
td,
th {
  border-bottom: 1px solid gray;
  padding: 15px 10px;
  text-align: left;
}

</style>
 