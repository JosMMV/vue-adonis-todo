<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <h1>Register</h1>
      <v-text-field label="Email" placeholder="Email" value="registerEmail"/>
      <v-text-field
        label="Password"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        value="registerPassword"
      />
      <v-btn color="green" dark><v-icon>account_box</v-icon>Register</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('authenticacion', [
      'registerEmail',
      'registerPassword',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
  },
};
</script>

<style>

</style>
