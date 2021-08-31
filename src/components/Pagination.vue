<template>
  <div class="pagination-wrapper">
    <div @click="onClick(cur - 1)">prev</div>
    <div class="page" :class="{'active' : cur===page}" v-for="page in amount" :key="page" @click="onClick(page)"> 
      {{ page }}  
    </div>
    <div @click="onClick(cur + 1)">next</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props:{
    length: Number,
    n: {          // к-во выводимых элементов на странице
      type: Number,  
      default: 5    // по умолчанию 5 элемента
    },
    cur: Number 
  },
  computed: {
    amount(){
      return Math.ceil(this.length / this.n) // округление в большую сторону к-во элементов на странице может быть меньше, но страница будет.
    },
  },
  methods: {
    onClick(page){
      if(page < 1 || page > this.amount){
        return;
      }else{
        this.$emit('changePage', page);
      }
    }, 
  },
};
</script>

<style lang="scss">
.pagination-wrapper {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      color: #ccc;
    }
  }
}
</style>