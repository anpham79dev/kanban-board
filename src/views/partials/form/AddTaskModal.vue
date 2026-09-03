<script lang="ts" setup>
import { TaskPriority, type AddTaskForm } from '@/types/task'
import { reactive } from 'vue'

const emit = defineEmits<{
    close: []
    submit: [payload: AddTaskForm]
}>()

const form = reactive<AddTaskForm>({
    task_title: '',
    task_description: '',
    task_priority: null,
    task_deadline: null,
})
</script>

<template>
    <Teleport to="body">
        <div
            class="modal show d-block"
            tabindex="-1"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">
                            <h5 class="modal-title">Add task</h5>
                            <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                                @click="emit('close')"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Task title</label>
                                <input
                                    v-model="form.task_title"
                                    type="text"
                                    class="form-control"
                                    name="task_title"
                                    placeholder="Enter your task title"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Task description</label>
                                <input
                                    v-model="form.task_description"
                                    type="text"
                                    class="form-control"
                                    name="task_description"
                                    placeholder="Enter your task description"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Deadline</label>
                                <input
                                    v-model="form.task_deadline"
                                    type="date"
                                    class="form-control"
                                    name="task_deadline"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Priority</label>
                                <select
                                    v-model="form.task_priority"
                                    class="form-select"
                                    name="task_priority"
                                >
                                    <option :value="null">No priority</option>
                                    <option
                                        v-for="priority in TaskPriority"
                                        :key="priority.value"
                                        :value="priority.value"
                                    >
                                        {{ priority.title }}
                                    </option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Assign to</label>
                                <select
                                    class="form-select"
                                    name="assignee_ids"
                                    disabled
                                >
                                    <!-- pending -->
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-link link-secondary"
                                @click="emit('close')"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                :disabled="!form.task_title.trim()"
                            >
                                Add task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal-backdrop show"></div>
    </Teleport>
</template>
