<template>
  <div>
    <h1>Food Category</h1>
    <div>
      <add-payment-form :select="setFood"/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
  name: "FoodCategory",
  data() {
    return {
      category: '',
      setFood: 'Food'
    }
  },
  components: {
    AddPaymentForm
  },
  computed: {
    ...mapGetters(["getCategories"])
  },
  methods: {
    ...mapMutations(["setCategoriesListData"]),
    putCategoryToStore() {
      this.category = "Food";
      this.$store.commit('setCategoriesListData', this.category)
    },
    
  },
  // created() {
  //   this.category = this.$store.getters.getCategories;
  // },
}
</script>