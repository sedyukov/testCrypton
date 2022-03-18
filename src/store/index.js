import Vue from "vue";
import Vuex from "vuex";
import photoModule from "@/store/heroModule";
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    photoModule,
  },
  plugins: [createPersistedState()]
});
