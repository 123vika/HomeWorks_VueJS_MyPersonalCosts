<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="edit-comp">
          Edit Component
          <p @click="onEditTable(editSetting)"><v-icon>mdi-playlist-edit</v-icon>Edit</p>
          <p><v-icon>mdi-delete</v-icon>Delete</p>
          <!-- <button @click="onCloseWindow">Close window</button> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import PaymentsDisplay from "../components/PaymentsDisplay.vue";
export default {
  name: "Edit",
  props: {
    editSetting: {},
  },
  // components: {PaymentsDisplay},
  methods: {
    onEditTable(editSetting) {
      console.log("edit11", editSetting);
      this.$edit.editTable1(editSetting);
      // this.$edit.showEdit(editSetting);
    },
  },
};
</script>

<style lang="scss">
.edit-comp {
  position: absolute;
  top: 55%;
  left: 50%;
  background: #efefef;
}
</style>
