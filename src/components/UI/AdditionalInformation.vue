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
        user.address.streetAddress
          ? user.address.streetAddress
          : "Адресс проживания не указан"
      }}</b>
    </div>
    <div>
      Город:
      <b>{{ user.address.city ? user.address.city : "Город не указан" }}</b>
    </div>
    <div>
      Провинция/штат:
      <b>{{
        user.address.state ? user.address.state : "Провинция/штат не указаны"
      }}</b>
    </div>
    <div>
      Индекс:
      <b>{{ user.address ? user.address.zip : "Индекс не указан" }}</b>
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
