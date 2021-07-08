import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },
  },
  actions: {
     GET_SMALL_DATA({commit}) {
      return  axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
          .then((response) => {
            commit('SET_USERS', response.data);
          })
    },
     GET_BIG_DATA ({commit}) {
      return axios.get('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
          .then((response) => {
            commit('SET_USERS', response.data);
          })
    }
  },
  getters: {
    GET_USERS(state) {
      return state.users;
    }
  }
});
