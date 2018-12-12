// eslint-disable-next-line
import HTTP from '../http';
import router from '../router';

export default{
  namespaced: true,
  state: {
    registerEmail: 'user3@gmail.com',
    registerPassword: '1234',
    registerError: null,
    loginEmail: 'testing2@gmail.com',
    loginPassword: '12346578',
    loginError: null,
    token: null,
  },
  actions: {
    logout({ commit }: any) {
      commit('setToken', null); // set value of token to null
      router.push('/login'); // then redirect to /login
    },
    register({ state, commit }: any): any {
      commit('setRegisterError', null); // set value of registerError to null
      return HTTP().post('/auth/register', { // return a post request to /auth/register with some parameters: email and password
        email: state.registerEmail,
        password: state.registerPassword,
      }).then(({ data }) => {
        commit('setToken', data.token); // change value of token by the value of the response data
        router.push('/'); // then redirect to home
      }).catch(() => {
        commit('setRegisterError', 'An error has ocurred trying to create your account.');
      });
    },
    login({ state, commit }: any): any {
      commit('setLoginError', null); // set value of LoginError to null
      return HTTP().post('/auth/login', { // return a post request to /auth/login with some parameters: email and password
        email: state.loginEmail,
        password: state.loginPassword,
      }).then(({ data }) => {
        commit('setToken', data.token); // change value of token by the value of the response data
        router.push('/'); // then redirect to home
      }).catch(() => {
        commit('setLoginError', 'An error has ocurred trying to login.');
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
    setLoginError(state: any, error: any) {
      state.loginError = error;
    },
    setLoginEmail(state: any, email: String) {
      state.loginEmail = email;
    },
    setLoginPassword(state: any, password: String) {
      state.loginPassword = password;
    },
  },
};
