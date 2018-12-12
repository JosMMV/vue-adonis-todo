<template>
  <v-toolbar color="green" dark fixed>
    <v-toolbar-title class="mr-4"><v-btn flat to="/">VUE TODO</v-btn></v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat v-if="isLoggedIn">
        <v-icon class="mr-1">playlist_add_check</v-icon>Projects
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/register" v-if="!isLoggedIn">
        <v-icon class="mr-1">account_box</v-icon>Register
      </v-btn>
      <v-btn flat v-if="!isLoggedIn">
        <v-icon class="mr-1">fingerprint</v-icon>Login
      </v-btn>
      <v-btn flat v-if="isLoggedIn" @click="logoutAndSetCurrentProject">
        <v-icon class="mr-1">exit_to_app</v-icon>Logout
      </v-btn>
      <v-btn flat>
        <v-icon class="mr-1">ondemand_video</v-icon>How this was made
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import router from '../router';

export default {
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
  methods: {
    ...mapActions('authentication', [
      'logout',
    ]),
    ...mapMutations('projects', [
      'setCurrentProject',
    ]),
    logoutAndSetCurrentProject() {
      this.logout();
      this.setCurrentProject(null);
    },
  },
};
</script>

<style>

</style>
