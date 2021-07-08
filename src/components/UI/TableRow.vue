<template>
  <div class="table__row"
  >
      <div class="field">{{ userData.id }}</div>
      <div class="field">{{ userData.firstName }}</div>
      <div class="field">{{ userData.lastName }}</div>
      <div class="field">{{ userData.email }}</div>
      <div class="field">{{ userData.phone }}</div>
  </div>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .table__row {
    display: flex;
  }
  .table__row div {
    width: 20%;
  }

</style>