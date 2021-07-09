<template>
  <div class="info">
    <div>
      Выбран пользователь <b>{{ fullName }}</b>
    </div>
    <div>Описание</div>
    <div><textarea v-model="user.description"></textarea></div>
    <div>
      Адрес проживания:
      <b>{{
        user.address
          ? user.address.streetAddress
          : "Адресс проживания не указан"
      }}</b>
    </div>
    <div>
      Город:
      <b>{{ user.address ? user.address.streetAddress : "Город не указан" }}</b>
    </div>
    <div>
      Провинция/штат:
      <b>{{
        user.address ? user.address.streetAddress : "Провинция/штат не указаны"
      }}</b>
    </div>
    <div>
      Индекс:
      <b>{{
        user.address ? user.address.streetAddress : "Индекс не указан"
      }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalInformation",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
};
</script>

<style scoped>
.info {
  margin-top: 15px;
}
.info div {
  margin-top: 10px;
}
</style>
