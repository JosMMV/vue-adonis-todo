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
// eslint-disable-next-line
import router from '../router';

export default {
  components: {
    Project,
    Task,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
    return this;
  },
  computed: {
    ...mapState('projects', [
      'currentProject',
    ]),
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>
