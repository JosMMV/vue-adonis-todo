<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4>
        <Project/>
      </v-flex>
      <v-flex xs8 class="pl-4" v-if="currentProject">
        <Task/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { mapGetters, mapActions, mapState } from 'vuex';
import Project from '@/components/Project.vue';
import Task from '@/components/Task.vue';

export default {
  components: {
    Project,
    Task,
  },
  computed: {
    ...mapState('projects', [
      'currentProject',
    ]),
  },
};
</script>
