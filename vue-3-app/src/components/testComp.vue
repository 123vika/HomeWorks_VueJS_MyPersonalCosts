<template>
  <div>
    <button @click="onClick">Click</button>
    <div>
      {{ text }} - {{ revertText }}
    </div>
    <div>
      {{ count }}
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue';
export default {
  name: 'testComp',
  props: {
    text: String
  },
  setup(props) {
    const revertText = computed(() => props.text.split('').reverse().join(''));
    const count = ref(0);
    const isShown = ref(false);
    const tmp = 0;
    const temp = reactive({
      data: {},
      errors: {}
    });
    const onClick = () => {
      count.value++;
      console.log(count, isShown, tmp, temp);
    };
    return {
      revertText,
      count,
      onClick,
      isShown,
      temp,
      tmp
    };
  },
}
</script>

<style>

</style>