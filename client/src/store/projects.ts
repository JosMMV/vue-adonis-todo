// eslint-disable-next-line
import HTTP from '../http';
// import router from '../router';

export default{
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
    createProject({ commit, state }): any {
      return HTTP().post('projects/', {
        tittle: state.newProjectName,
      }).then(({ data }) => {
        commit('appendProject', data);
        commit('setNewProjectName', null);
      });
    },
  },
  getters: {
  },
  mutations: {
    setNewProjectName(state: any, name: any) {
      state.newProjectName = name;
    },
    appendProject(state: any, project: any) {
      state.projects.push(project);
    },
  },
};
