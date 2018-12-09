// eslint-disable-next-line
import HTTP from '../http';
import router from '../router';

export default{
  namespaced: true,
  state: {
    registerEmail: 'user3@gmail.com',
    registerPassword: '1234',
    registerError: null,
    token: null,
  },
  actions: {
    logout({ commit }) {
      commit('setToken', null); // set value of token to null
      router.push('/login'); // then redirect to /login
    },
    register({ state, commit }): any {
      commit('setRegisterError', null); // set value of registerError to null
      return HTTP().post('/auth/register', { // return a post request to /auth/register with some parameters: email and password
        email: state.registerEmail,
        password: state.registerPassword,
      }).then(({ data }) => {
        commit('setToken', data.token); // set value of token by the value of the response data
        router.push('/'); // then redirect to home
      }).catch(() => {
        commit('setRegisterError', 'An error has ocurred trying to create your account.');
      });
    },
  },
  getters: {
    isLoggedIn(state: any) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state: any, token: any) {
      state.token = token;
    },
    setRegisterError(state: any, error: any) {
      state.registerError = error;
    },
    setRegisterEmail(state: any, email: String) {
      state.registerEmail = email;
    },
    setRegisterPassword(state: any, password: String) {
      state.registerPassword = password;
    },
  },
};
