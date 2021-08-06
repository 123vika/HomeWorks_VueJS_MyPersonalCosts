<template>
  <div>
    <input type="text" v-model="date" placeholder="date" />
    <input type="text" v-model="category" placeholder="category" />
    <input type="text" v-model="value" placeholder="value" />
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    onSave() {
      const { value, category } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };
      // console.log('emit: addNewPayment', data);
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style lang="sass">
// .form {
// display: none;
// }
</style>