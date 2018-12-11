<template>
  <Panel title="Projects">
    <div class="project mt-2" v-for="project in projects" :key="project.id">
      <v-layout>
        <v-flex xs9 class="text-xs-left">
          <span
            v-if="!project.isEditMode"
          >
            {{project.tittle}}
          </span>
          <v-text-field
            autofocus
            v-if="project.isEditMode"
            :value="project.tittle "
            @keyup.enter="saveProject(project)"
            @input="setProjectTitle({project, title: $event})"
          />
        </v-flex>
        <v-flex xs3>
          <v-icon
            v-if="!project.isEditMode"
            @click="setEditMode({project, value: true})"
          >edit</v-icon>
          <v-icon
            v-if="project.isEditMode"
            @click="saveProject(project)"
          >check</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-4">
      <v-flex xs8>
        <v-text-field
          placeholder="My project name..."
          @input="setNewProjectName"
          :value="newProjectName"
        />
      </v-flex>
      <v-flex xs4>
        <v-btn class="mt-2" dark color="green" @click="createProject">
          <v-icon class="mr-2">add_circle</v-icon>
          Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel.vue';
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  components: {
    Panel,
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
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
    ]),
  },
};
</script>

<style>
.project{
  font-size: 24px;
}

.v-icon{
  cursor: pointer;
}

.v-icon:hover{
  color: #333;
}
</style>
