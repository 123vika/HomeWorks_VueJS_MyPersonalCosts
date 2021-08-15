<template>
  <div :class="[$style.wrapper]">
    <!-- <div>Dashboard</div>  -->
    <header>
      <div :class="[$style.tytle]">My Personal Cost</div>
    </header>
    <button :class="[$style.newCostBtn]" @click="showFlag = !showFlag">
      ADD NEW COST +
    </button>
  
    <div>
        <input type="text" v-model="newCategory" placeholder="Enter category">
        <button @click="addNewCategory">Add new category</button>
    </div>

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
    <pagination
      :cur="cur"
      :n="n"
      :length="paymentsList.length"
      @changePage="onChangePage"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      showFlag: 0,
      cur: 1,
      n: 5,
      numOfPage: 1,
      newCategory: '',
    };
  },
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentList", "addNewCategoryToList"]),
    ...mapActions(["fetchData"]),
    addData(newPayment) {
      console.log(newPayment);
      this.addDataToPaymentList(newPayment);
    },
    onChangePage(page) {
      console.log(page);
      this.cur = page;
    },
    onLoadNextPage() {
      this.numOfPage = this.numOfPage + 1;
      this.$store.dispatch("fetchData", this.numOfPage);
    },
    addNewCategory() {
      this.$store.commit('addNewCategoryToList', this.newCategory);
    },
  //   showAddNewCategory(newCategory) {
  //     this.addNewCategory();
  //     if(thic.newCategory === 'other') {
  //       this.addNewCategory();
  //     };
  //   }
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
  async created() {
    await this.$store.dispatch("fetchData", this.numOfPage);
    if(this.$route.params?.page) {
      this.onChangePage(Number(this.$route.params.page));
    }
  },
  mounted() {},
};
</script>

<style lang="scss" module>
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
