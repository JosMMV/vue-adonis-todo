export default{
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
  },
  mutations: {
    setRegisterEmail(state: any, email: String) {
      state.registerEmail = email;
    },
    setRegisterPassword(state: any, password: String) {
      state.registerPassword = password;
    },
  },
};
