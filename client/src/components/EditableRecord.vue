<template>
  <v-layout row wrap>
    <v-flex xs9 class="text-xs-left">
      <slot></slot>
      <span
        class="cursor"
        v-if="!isEditMode"
        @click="$emit('currentProject')"
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
.cursor{
  cursor: pointer;
}
</style>
