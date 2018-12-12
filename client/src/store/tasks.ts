import Vue from 'vue';
// eslint-disable-next-line
import HTTP from '../http';

export default{
  namespaced: true,
  state: {
    tasks: [],
    newTaskDescription: null,
  },
  actions: {
    deleteTask({ commit }: any, task: any): any {
      return HTTP().delete(`tasks/${task.id}`)
        .then(() => {
          commit('removeTask', task);
        });
    },
    saveTask({ commit }: any, task: any): any {
      return HTTP().patch(`tasks/${task.id}`, task)
        .then(() => {
          commit('setEditMode', { task, value: false });
        });
    },
    fetchTasks({ commit }: any, project: any): any {
      return HTTP().get(`projects/${project.id}/tasks`)
        .then(({ data }) => {
          commit('setTasks', data);
        });
    },
    createTask({ commit, state, rootState }: any): any {
      return HTTP().post(`projects/${rootState.projects.currentProject.id}/tasks`, {
        description: state.newTaskDescription,
      }).then(({ data }) => {
        commit('appendTask', data);
        commit('setNewTaskDescription', null);
      });
    },
  },
  getters: {
  },
  mutations: {
    setNewTaskDescription(state: any, description: String) {
      state.newTaskDescription = description;
    },
    appendTask(state: any, task: object) {
      state.tasks.push(task);
    },
    setTasks(state: any, tasks: any) {
      state.tasks = tasks;
    },
    setTaskDescription(state: any, { task, description }: any) {
      task.description = description;
    },
    setEditMode(state: any, { task, value }: any) {
      Vue.set(task, 'isEditMode', value);
    },
    removeTask(state: any, task: any) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    switchCompleted(state: any, task: any) {
      task.completed = !task.completed;
    },
  },
};
