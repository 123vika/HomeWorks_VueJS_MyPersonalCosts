<template>
  <div>
    <input type="text" v-model="id" placeholder="id" />
    <input type="date" v-model="date" placeholder="date" />
    <select v-model="category" v-if="options">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
    <input type="number" v-model.number="value" placeholder="value" />
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex';

export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
      id: 0
    };
  },
  computed: {
    ...mapGetters(["getDataFromForm"]),//!!!!!!!!!!!!!!!
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
    options(){
      return this.$store.getters.getCategories;
    },
    getId(){
      return (Math.random()*100);
    }
  },
  methods: {
    ...mapActions([
      'fetchCategoryList', "addFromForm"
    ]),
    ...mapMutations([ "addDataFromForm"]),//!!!!!!!!!!!!!
    onSave() {
      const { value, category} = this;
      const data = {
        id: this.id || this.getId,
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      // this.$emit("addNewPayment", data);
      this.addFromForm(data); //!!!!!!!!!!!
    },
  },
  created() {
    this.fetchCategoryList();
  },
};
</script>
