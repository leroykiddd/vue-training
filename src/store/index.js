import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },
    ADD_USERS: (state, users) => {
      state.users.unshift(...users);
    },
  },
  actions: {},
  getters: {
    GET_USERS(state) {
      return state.users;
    },
  },
});
