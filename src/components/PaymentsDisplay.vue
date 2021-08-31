<template>
  <v-container>
    <!-- <v-dialog v-model="dialog" width="500"> -->
      <!-- <template v-slot:activator="{ on }"> -->
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col cols="1">Id</v-col>
              <v-col cols="4">Date</v-col>
              <v-col cols="4">Category</v-col>
              <v-col cols="2">Value</v-col>
              <v-col cols="1">Edit</v-col>
            </v-row>

            <v-row class="item" v-for="item in list" :key="item.id">
              <v-col cols="1">{{ item.id }}</v-col>
              <v-col cols="4">{{ item.date }}</v-col>
              <v-col cols="4">{{ item.category }}</v-col>
              <v-col cols="2">{{ item.value }}</v-col>
              <v-col cols="1">
                <v-btn color="teal" 
                dark v-on="on" 
                @click="onEditShow(item)"
                >
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-col>
              <!-- <v-col cols="1"><button @click="onEditShow(item)">...</button></v-col> -->
            </v-row>
          </v-col>

          <v-dialog v-model="dialog" width="500">
            <!-- <template v-slot:activator="{ on }">
              <v-btn
                color="teal"
                dark
                v-on="on"
                :class="[$style.newCostBtn]"
                @click="showFlag = !showFlag"
              >
              ADD NEW COST <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template> -->

            <v-card>
              <add-payment-form @close="dialog=false" :settings="settings" :mode="'Edit'"/>
            </v-card>
            
          </v-dialog>

        </v-row>
      <!-- </template> -->
    <!-- </v-dialog> -->
  </v-container>
</template>

<script>
// import Edit from './components/Edit';
import AddPaymentForm from "../components/AddPaymentForm.vue";
export default {
  name: "PaymentsDisplay",
  components: { AddPaymentForm },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
      settings: {},
    };
  },
  methods: {
    onEditShow(item) {
      console.log("paymentShow11", item);
      this.dialog = true;
      this.settings = item;
      // this.$edit.showEdit(item);
    },
  },
 
};
</script>

