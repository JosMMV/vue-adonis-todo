<template>
  <Panel title="Projects">
    <div v-for="project in projects" :key="project.id">
      {{project.title}}
    </div>
    <v-layout row wrap>
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
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
    ]),
    ...mapActions('projects', [
      'createProject',
    ]),
  },
};
</script>

<style>

</style>
