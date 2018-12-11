<template>
  <v-layout>
    <v-flex xs9 class="text-xs-left">
      <span
        v-if="!isEditMode"
      >
        {{title}}
      </span>
      <v-text-field
        autofocus
        v-if="isEditMode"
        :value="title"
        @keyup.enter="$emit('onCheck')"
        @input="$emit('onSetTitle', $event)"
      />
    </v-flex>
    <v-flex xs3>
      <v-icon
        v-if="!isEditMode"
        @click="$emit('onEdit')"
      >edit</v-icon>
      <v-icon
        v-if="isEditMode"
        @click="$emit('onCheck')"
      >check</v-icon>
      <v-icon
        class="pl-2"
        v-if="!isEditMode"
        @click="$emit('onDelete')"
      >delete</v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'title',
  ],
};
</script>

<style>

</style>
