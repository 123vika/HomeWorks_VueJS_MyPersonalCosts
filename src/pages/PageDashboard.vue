<template>
  <v-container>
    <v-row>
      <v-col
        cols="8
      "
      >
        <div :class="[$style.wrapper]">
          <!-- <div>Dashboard</div>  -->
          <!-- <calculator /> -->
          <header>
            <div class="text-h5 text-sm-h3">My Personal Cost</div>
          </header>

          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn
                color="teal"
                dark
                v-on="on"
                :class="[$style.newCostBtn]"
                @click="showFlag = !showFlag"
              >
                ADD NEW COST <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-card>
              <add-payment-form @close="dialog=false"/>
            </v-card>
          </v-dialog>
    
        <!-- <div>
      <input type="text" v-model="newCategory" placeholder="Enter category" />
      <button @click="addNewCategory">Add new category</button>
    </div> -->

          <!-- <div>
            <add-payment-form
              :class="[$style.form]"
              v-if="showFlag"
              @addNewPayment="addData"
              :settings="settingsid"
            />
          </div> -->

          <div :class="[$style.content]">
            Total Value: {{ getFPV }}
            <payments-display :class="[$style.list]" :list="currentElements" />
            <button @click="onLoadNextPage">Load next page</button>
          </div>
          <button @click="showAddCategoryForm">Add category</button>

          <button @click="showPaymentFormFn">Add payment</button>

          <pagination
            :cur="cur"
            :n="n"
            :length="paymentsList.length"
            @changePage="onChangePage"
          />
        </div>
      </v-col>
      <v-col cols="4">CHART</v-col>

      <button-component
        ><template #prependIcon
          ><v-icon @click="someClick">mdi-minus</v-icon></template
        >Click me</button-component
      >
      <button-component>Back</button-component>
      <button-component>Next</button-component>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
// import Calculator from "../components/Calculator.vue";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
    ButtonComponent,
    // Calculator,
    // : () => import('./Calculator')
  },
  data() {
    return {
      showFlag: 0,
      cur: 1,
      n: 5,
      numOfPage: 1,
      newCategory: "",
      showPaymentForm: false,
      modalSettings: "",
      settingsid: {},
      dialog: false,
    };
  },
  methods: {
    ...mapMutations([
      "setPaymentListData",
      "addDataToPaymentList",
      // "addNewCategoryToList",
    ]),
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
    // addNewCategory() {
    //   this.$store.commit("addNewCategoryToList", this.newCategory);
    // },
    showPaymentFormFn() {
      this.$modal.show("AddPaymentForm", { header: "Add Payment Form" });
    },
    onEditTable(editSetting) {
      this.settingsid = editSetting;
      this.showFlag = true;
      console.log("dashboard", editSetting);
      console.log("dashboard1", this.settingsid);
    },
    showAddCategoryForm() {
      this.$modal.show("addCategory", { header: "Add new category form" });
    },
    //   showAddNewCategory(newCategory) {
    //     this.addNewCategory();
    //     if(this.newCategory === 'other') {
    //       this.addNewCategory();
    //     };
    //   }
    someClick() {
      console.log("someClick");
    },
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
    if (this.$route.params?.page) {
      this.onChangePage(Number(this.$route.params.page));
    }
  },
  mounted() {
    this.$edit.EventBus.$on("editTable1", this.onEditTable);
  },
  beforeDestroy() {
    this.$edit.EventBus.$off("editTable1", this.onEditTable);
  },
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
  background-color: teal;
}
td,
th {
  border-bottom: 1px solid gray;
  padding: 15px 10px;
  text-align: left;
}
</style>
