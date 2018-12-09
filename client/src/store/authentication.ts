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
    register({ state, commit }): any {
      commit('setRegisterError', null);
      return HTTP().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      }).then(({ data }) => {
        commit('setToken', data.token);
        router.push('/');
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
