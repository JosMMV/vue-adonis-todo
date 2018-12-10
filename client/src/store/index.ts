// import CreatePersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line
import authentication from './authentication';
import projects from './projects';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
    projects,
  },
  mutations: {

  },
  actions: {

  },
});
