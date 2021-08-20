<template>
  <div>
    <div>
      <input type="text" v-model="id" :placeholder="5" />
      <input type="date" v-model="date" :placeholder="settings.date" />
      <select v-model="category" v-if="options">
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>

      <input type="number" v-model.number="value" :placeholder="settings.value" />

      <button @click="onSave" :disabled="!category">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "AddPaymentForm",
  props: {
    settings: {
      Type: Object,
      default: null,
    },
  },

  data() {
    return {
      date: "",
      category: "",
      value: "",
      id: "",
    };
  },
  computed: {
    ...mapGetters(["getDataFromForm"]),
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();// getDay()
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
    options() {
      return this.$store.getters.getCategories;
    },
    getId() {
      return Math.random() * 100;
    },
  },
  methods: {
    ...mapActions(["fetchCategoryList", "addFromForm"]),
    ...mapMutations(["addDataFromForm"]),
    onSave() {
      const { value, category } = this;
      const data = {
        id: this.id || this.getId,
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      this.addFromForm(data);
      this.$store.commit('addDataToPaymentList', data)
      
    },
  },
  async created() {
    await  this.fetchCategoryList();
    if(this.$route.name === 'AddDataFromUrl'){
      this.value = Number(this.$route.query?.value) || 0;
      this.category = this.$route?.params?.category || '';
      // this.$router.push('/dashboard')
    }
    // console.log("add_payment_form setting =", this.settings);
  },
  mounted() {
    
  },
  updated() {
    // console.log("add_payment_form setting2 =", this.settings);

    if (this.settings !== null) {
      console.log("add_payment_form setting1 =", this.settings);
      this.id = this.settings.id;
      // this.date = this.settings.date;
      this.category = this.settings.category;
      this.value = this.settings.value;
    }
  },
};
</script>
