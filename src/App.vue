<template>
  <div id="app">
    <div :class="[$style.links]">
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/food">Food</router-link> /
      <router-link to="/entertainment">Entertainment</router-link> /
      <router-link to="/transport">Transport</router-link> /
      <button @click="goToPage(404)">404</button>
    </div>
    <div class="content">
      <router-view />
    </div>
    <modal-window-add-payment-form
      v-if="modalShown"
      :modalSettings="modalSettings"
    />
    <edit v-show="editShow" :editSetting="editSettings1" />
  </div>
</template>

<script>
import ModalWindowAddPaymentForm from "./components/ModalWindowAddPaymentForm";
import Edit from "./components/Edit";

export default {
  name: "App",
  components: {
    ModalWindowAddPaymentForm,
    Edit,
  },
  data() {
    return {
      pageName: "",
      modalShown: false,
      modalSettings: {},
      editSettings: 0,
      editSettings1: 0,
      editShow: false,
    };
  },

  methods: {
    goToPage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },
    onShow(settings) {
      this.modalSettings = settings;
      this.modalShown = true;
    },
    onHide() {
      this.modalShown = false;
      this.modalSettings = {};
    },
    onShowEdit(id) {
      // TODO !!!argument
      this.editSettings1 = id;
      console.log("appEdit", id);
      console.log("appEdit1", this.editSettings1);
      this.editShow = true;
    },
    onHideEdit() {
      this.editSettings = {};
      this.editShow = false;
    },
    onEditTableHide() {
      this.editShow = false;
    }
   
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.$edit.EventBus.$on("showEdit", this.onShowEdit);
    this.$edit.EventBus.$on("editTable", this.editTable);
    this.$edit.EventBus.$on("editTable1", this.onEditTableHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
    this.$edit.EventBus.$off("showEdit", this.onShowEdit);
    this.$edit.EventBus.$off("editTable", this.editTable);
    this.$edit.EventBus.$off("editTable1", this.onEditTableHide);
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 