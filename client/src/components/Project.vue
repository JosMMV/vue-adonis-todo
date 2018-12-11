<template>
  <Panel title="Projects">
    <div class="project mt-2" v-for="project in projects" :key="project.id">
      <EditableRecord
        :isEditMode="project.isEditMode"
        :title="project.tittle"
        @onSetTitle="setProjectTitle({project, title: $event})"
        @onEdit="setEditMode({project, value: true})"
        @onCheck="saveProject(project)"
        @onDelete="deleteProject(project)"
        @currentProject="projectClicked(project)"
      />
    </div>
    <CreateRecord
      placeholder="My project name..."
      :value="newProjectName"
      @onInput="setNewProjectName"
      @create="createProject"
    />
  </Panel>
</template>

<script>
import Panel from '@/components/Panel.vue';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  components: {
    Panel,
    CreateRecord,
    EditableRecord,
  },
  mounted() {
    this.fetchProjects();
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    projectClicked(project) {
      this.setCurrentProject(project);
      this.fetchTasks(project);
    },
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
      'setCurrentProject',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
    ...mapActions('tasks', [
      'fetchTasks',
    ]),
  },
};
</script>

<style>
.project{
  font-size: 22px;
}

.v-icon{
  cursor: pointer;
}

.v-icon:hover{
  color: #333;
}
</style>
