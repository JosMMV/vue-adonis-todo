<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4>
        <Project/>
      </v-flex>
      <v-flex xs8 class="pl-4">
        <Panel title="Tasks"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import Panel from '@/components/Panel.vue';
import Project from '@/components/Project.vue';
// eslint-disable-next-line
import router from '../router';

export default {
  components: {
    Panel,
    Project,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
    return this;
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>
