<template>
  <div class="home">
    <CustomButton
      @click="loadingBigData"
    >
      Big Data
    </CustomButton>
    <CustomButton
        @click="loadingSmallData"
    >
      Small Data
    </CustomButton>
    <CustomButton

    >
      Add User
    </CustomButton>
    <CustomTable v-if="isLoaded"
      :usersData="GET_USERS"
    />
    <h2 v-if="isLoading">Loading data .......</h2>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import CustomTable from '@/components/UI/CustomTable'
import CustomButton from "@/components/UI/CustomButton";
import axios from "axios";

export default {
  name: "Home",
  components: {
    CustomButton,
    CustomTable,
  },
  data() {
    return {
      isLoaded: false,
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'GET_SMALL_DATA',
      'GET_BIG_DATA'
    ]),
    ...mapMutations([
        'SET_USERS'
    ]),
    async loadingBigData() {
      this.isLoaded = false
      this.isLoading = true
      await axios.get('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
          .then((response) => {
            this.SET_USERS(response.data);
          })
      this.isLoading = false
      this.isLoaded = true
    },
    async loadingSmallData() {
      this.isLoaded = false
      this.isLoading = true
      await axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
          .then((response) => {
            this.SET_USERS(response.data);
          })
      this.isLoaded = true
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters([
        'GET_USERS'
    ])
  },
}
</script>

<style scoped>
.home {
  width: 100%;
  align-items: center;
}


</style>