<template>
   <div>
      <input type="text" v-model="newCategory" placeholder="Enter category" />
      <button @click="addNewCategory">Add new category</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  
  name: "AddCategory",
  data() {
    return {
      newCategory: ''
    };
  },
  methods: {
    ...mapMutations([
      "addNewCategoryToList"
    ]),
     addNewCategory() {
      this.$store.commit("addNewCategoryToList", this.newCategory);
    },
  },
}
</script>

<style>

</style>