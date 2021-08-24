<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <!-- <div class="list"> -->
          <!-- <table> -->
            <!-- <thead> -->
              <v-row>
                <v-col cols="1">Id</v-col>
                <v-col cols="4">Date</v-col>
                <v-col cols="4">Category</v-col>
                <v-col cols="2">Value</v-col>
                <v-col cols="1">Edit</v-col>
              </v-row>
            <!-- </thead> -->
            <!-- <tbody> -->
              <!-- <tr class="item" v-for="(item, idx) in list" :key="idx"> -->
              <v-row class="item" v-for="item in list" :key="item.id">
                <v-col cols="1">{{ item.id }}</v-col>
                <v-col cols="4">{{ item.date }}</v-col>
                <v-col cols="4">{{ item.category }}</v-col>
                <v-col cols="2">{{ item.value }}</v-col>
                <v-col cols="1"><button @click="onEditShow(item)">...</button></v-col>
              </v-row>
            <!-- </tbody> -->
          <!-- </table> -->
        <!-- </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Edit from './components/Edit';
export default {
  name: "PaymentsDisplay",
  // components: { Edit },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    onEditShow(item) {
      console.log("paymentShow", item);
      this.$edit.showEdit(item);
    },
  },
};
</script>

