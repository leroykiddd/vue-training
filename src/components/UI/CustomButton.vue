<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: #42b983;
  color: #fff;
  border-radius: 99px;
  border: 1px solid #42b983;
  text-transform: uppercase;
  outline: none;
  transition: all 0.2s;
  margin: 15px;

}
.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>