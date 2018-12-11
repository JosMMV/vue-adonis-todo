import Vue from 'vue';
// eslint-disable-next-line
import HTTP from '../http';

export default{
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
    currentProject: null,
  },
  actions: {
    deleteProject({ commit }: any, project: any): any {
      return HTTP().delete(`projects/${project.id}`)
        .then(() => {
          commit('removeProject', project);
        });
    },
    saveProject({ commit }: any, project: any): any {
      return HTTP().patch(`projects/${project.id}`, project)
        .then(() => {
          commit('setEditMode', { project, value: false });
        });
    },
    fetchProjects({ commit }: any): any {
      return HTTP().get('projects/')
        .then(({ data }) => {
          commit('setProjects', data);
        });
    },
    createProject({ commit, state }: any): any {
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
    setCurrentProject(state: any, project: any) {
      state.currentProject = project;
    },
    setNewProjectName(state: any, name: String) {
      state.newProjectName = name;
    },
    appendProject(state: any, project: object) {
      state.projects.push(project);
    },
    setProjects(state: any, projects: any) {
      state.projects = projects;
    },
    setProjectTitle(state: any, { project, title }: any) {
      project.tittle = title;
    },
    setEditMode(state: any, { project, value }: any) {
      Vue.set(project, 'isEditMode', value);
    },
    removeProject(state: any, project: any) {
      state.projects.splice(state.projects.indexOf(project), 1);
    },
  },
};
