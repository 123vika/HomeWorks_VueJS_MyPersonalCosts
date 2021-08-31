<template>
  <div class="modal-wrapper">
    <div class="modalContent">
      <slot /> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style scoped>
.modal-wrapper {
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0, .90);
}
.modalContent {
background-color: #fff;
width: 80%;
height: 300px;
}
</style>