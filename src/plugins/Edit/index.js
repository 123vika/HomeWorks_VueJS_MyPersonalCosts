export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.prototype.$edit = {

      EventBus: new Vue(),

      // editTable() {
      //   this.EventBus.$emit('editTable');
      //   console.log('editTable');
      // },

      showEdit(setting) {
        this.EventBus.$emit('showEdit', setting);
        console.log('indexShowEdit', setting);
      },
      hideEdit() {
        this.EventBus.$emit('hideEdit');
        
        console.log('hideEdit');
      },
      editTable1(editSetting) {
        this.EventBus.$emit('editTable1', editSetting);
      }

    };
  }
};