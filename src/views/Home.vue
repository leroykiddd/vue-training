<template>
  <div class="home">
    <CustomButton @click="loadingBigData"> Big Data </CustomButton>
    <CustomButton @click="loadingSmallData"> Small Data </CustomButton>
    <CustomButton @click="changeModalVisible"> Add User </CustomButton>
    <h2 v-if="isLoading">Loading data .......</h2>
    <CustomTable :usersData="GET_USERS" />
    <ModalWindow v-show="modalVisible" @hide="changeModalVisible" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CustomTable from "@/components/UI/CustomTable";
import CustomButton from "@/components/UI/CustomButton";
import axios from "axios";
import ModalWindow from "@/components/UI/ModalWindow";

export default {
  name: "Home",
  components: {
    ModalWindow,
    CustomButton,
    CustomTable,
  },
  data() {
    return {
      isLoaded: false,
      isLoading: false,
      modalVisible: false,
    };
  },
  methods: {
    ...mapActions(["GET_SMALL_DATA", "GET_BIG_DATA"]),

    ...mapMutations(["SET_USERS", "ADD_USERS"]),

    async loadingBigData() {
      this.isLoaded = false;
      this.isLoading = true;
      await axios
        .get(
          "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
        )
        .then((response) => {
          this.ADD_USERS(response.data);
        });
      this.isLoading = false;
      this.isLoaded = true;
    },

    async loadingSmallData() {
      this.isLoaded = false;
      this.isLoading = true;
      await axios
        .get(
          "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
        )
        .then((response) => {
          this.ADD_USERS(response.data);
        });
      this.isLoaded = true;
      this.isLoading = false;
    },

    changeModalVisible() {
      this.modalVisible = !this.modalVisible;
    },
  },
  computed: {
    ...mapGetters(["GET_USERS"]),
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  align-items: center;
}
</style>
