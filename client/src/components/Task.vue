<template>
  <Panel title="Tasks">
    <div class="task mt-2" v-for="task in tasks" :key="task.id">
      <EditableRecord
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onSetTitle="setTaskDescription({task, description: $event})"
        @onEdit="setEditMode({task, value: true})"
        @onCheck="saveTask(task)"
        @onDelete="deleteTask(task)"
      >
        <v-icon
          @click="checkClicked(task)"
        >
          {{task.completed ? 'check_box' : 'check_box_outline_blank'}}
        </v-icon>
      </EditableRecord>
    </div>
    <CreateRecord
      placeholder="I need to..."
      :value="newTaskDescription"
      @onInput="setNewTaskDescription"
      @create="createTask()"
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
  computed: {
    ...mapState('tasks', [
      'newTaskDescription',
      'tasks',
    ]),
  },
  methods: {
    ...mapMutations('tasks', [
      'setNewTaskDescription',
      'setEditMode',
      'setTaskDescription',
      'switchCompleted',
    ]),
    ...mapActions('tasks', [
      'createTask',
      'fetchTasks',
      'saveTask',
      'deleteTask',
    ]),
    checkClicked(task) {
      this.switchCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style>
.task{
  font-size: 18px;
}

.v-icon{
  cursor: pointer;
}

.v-icon:hover{
  color: #333;
}
</style>
