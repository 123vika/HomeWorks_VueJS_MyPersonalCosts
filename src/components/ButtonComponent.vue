<template>
  <button @click="emit('onClickButton', $event)">
    <slot name="prependIcon" />
    <slot />
    <slot name="prevIcon" />
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  // methods: {
  //   onClickButton() {
  //     console.log("onClickButton");
  //   }
  // },
  created() {
    console.log(this.$slots, this.$scopedSlots);
  }

}
</script>
