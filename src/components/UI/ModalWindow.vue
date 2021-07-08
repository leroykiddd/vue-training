<template>
  <div class="window" @click.stop="hideDialog">
    <form @submit.prevent @click.stop>
      <input
        :class="{ error: this.$v.user.id.$error }"
        type="text"
        v-model="user.id"
        placeholder="ID"
      />
      <input
        :class="{ error: this.$v.user.firstName.$error }"
        type="text"
        v-model="user.firstName"
        placeholder="firstName"
      />
      <input
        :class="{ error: this.$v.user.lastName.$error }"
        type="text"
        v-model="user.lastName"
        placeholder="lastName"
      />
      <input
        :class="{ error: this.$v.user.phone.$error }"
        type="text"
        v-model="user.phone"
        placeholder="phone"
      />
      <input
        :class="{ error: this.$v.user.email.$error }"
        type="text"
        v-model="user.email"
        placeholder="email"
      />
      <CustomButton @click="createUser">create</CustomButton>
    </form>
  </div>
</template>

<script>
import CustomButton from "@/components/UI/CustomButton";
import required from "vuelidate/lib/validators/required";
import email from "vuelidate/lib/validators/email";
import minLength from "vuelidate/lib/validators/minLength";
import { isPhone, isID } from "@/validators";

export default {
  name: "ModalWindow",
  components: {
    CustomButton,
  },
  data() {
    return {
      user: {
        id: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      form_class: [],
    };
  },
  validations: {
    user: {
      id: { required, isID },
      firstName: { required, minLength: minLength(3) },
      lastName: { required, minLength: minLength(3) },
      email: { required, email },
      phone: { required, isPhone },
    },
  },
  methods: {
    createUser() {
      this.$v.user.$touch();
      if (this.$v.user.$error) {
        return;
      }
      this.user.id = Number(this.user.id);
      this.$store.commit("ADD_USERS", [this.user]);
      this.user = {
        id: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      };
      this.hideDialog();
    },
    hideDialog() {
      this.$emit("hide");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
input {
  margin-top: 15px;
  height: 30px;
  border-radius: 99px;
  padding: 5px;
  border: 1px solid #42b983;
}
input:focus {
  outline: none;
}
.window {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.error {
  border: 2px solid red;
}
</style>
