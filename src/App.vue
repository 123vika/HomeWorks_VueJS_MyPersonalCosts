<template>
  <v-app>
    <v-app-bar app flat color="teal" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/dashboard" plain :ripple="false">Dashboard </v-btn>

      <v-btn to="/about" plain :ripple="false">About </v-btn>
    </v-app-bar>
      <edit v-if="editShow" :editSetting="editSettings1" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import edit from ".plugins/Edit/index";

export default {
  name: "App",
  components: {
    // ModalWindowAddPaymentForm: () =>
    //   import("./components/ModalWindowAddPaymentForm"),
    Edit: () => import("./components/Edit"),
    // Edit
  },
  data: () => ({
    editSettings: 0,
    editSettings1: 0,
    editShow: false,
  }),
  methods: {  
  },

};
</script>
