<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Edit Component</v-list-item-title>
        <v-list-item-subtitle @click="onEditTable(editSetting)">
          <v-icon>mdi-playlist-edit</v-icon>Edit
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon>mdi-delete</v-icon>Delete
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-btn @click="dialog=false">Close</v-btn>    
          
         
          <!-- <p @click="onEditTable(editSetting)"><v-icon>mdi-playlist-edit</v-icon>Edit</p> -->
          <!-- <p><v-icon>mdi-delete</v-icon>Delete</p> -->
          <!-- <button @click="onCloseWindow">Close window</button> -->
  </v-card>
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
