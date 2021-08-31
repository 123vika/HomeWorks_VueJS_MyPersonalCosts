<template>
  <button @click="onClickBtn">Button</button>
</template>

<script>
export default {
  name: 'Button',
  emits: {
    'custom-event-1': null, 
    'custom-event-2' (payload) {
      return !!(payload?.name && payload?.role);
    },
    },
  methods: {
    onClickBtn() {
      const user = {
        role: 'admin',
        name: 'Vasya'
      };
      this.$emit('custom-event-1', 'data-1'),
      this.$emit('custom-event-2', user)
    },
  },
}
</script>

<style>

</style>