<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="id" label="id" />
    <v-text-field v-model="date" label="date" />
    <v-text-field v-model.number="value" label="value" />
    <v-select v-model="category" label="category" :items="options" />
    <v-btn @click="onSave" name="btnClick">Save</v-btn>
  </v-card>
  <!-- <div v-on:submit.prevent>
      <input type="text" v-model="id" />
      <input type="date" v-model="date" />
      <select v-model="category" v-if="options">
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
      </select>

      <input type="number" v-model.number="value" name="value" />

      <button @click="onSave" :disabled="!category" name="btnClick">
        Save
      </button>
    </div> -->
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
    ...mapGetters(["getDataFromForm", "getListLen"]),
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate(); // getDay()
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
    options() {
      return this.$store.getters.getCategories;
    },
    getId() {
      // return Math.random() * 100;
      return this.$store.getters.getListLen + 1;
    },
  },
  methods: {
    ...mapActions(["fetchCategoryList", "addFromForm", "addDataToPaymentList"]),
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
      this.addDataToPaymentList(data);
      // this.$store.commit("addDataToPaymentList", data);
      this.$emit('close');
    },
  },
  async created() {
    await this.fetchCategoryList();
    if (this.$route.name === "AddDataFromUrl") {
      this.value = Number(this.$route.query?.value) || 0;
      this.category = this.$route?.params?.category || "";
    }
  },
  mounted() {},
  updated() {
    if (this.settings !== null && this.id !== this.settings.id) {
      console.log("add_payment_form setting1 =", this.settings);
      this.id = this.settings.id;
      // this.date = this.settings.date;
      this.category = this.settings.category;
      this.value = this.settings.value;
    }
  },
};
</script>
