<script lang="ts" setup>
import { TaskPriority } from '@/types/task'

const emit = defineEmits<{
    close: []
}>()
</script>

<template>
    <Teleport to="body">
        <div
            class="modal show d-block"
            tabindex="-1"
        >
            <div class="modal-dialog">
                <div class="modal-content">
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
                                type="text"
                                class="form-control"
                                name="task_title"
                                placeholder="Enter your task title"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Task description</label>
                            <input
                                type="text"
                                class="form-control"
                                name="task_description"
                                placeholder="Enter your task description"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Deadline</label>
                            <input
                                type="date"
                                class="form-control"
                                name="task_deadline"
                                placeholder="Enter your deadline"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Priority</label>
                            <select
                                class="form-select"
                                name="task_priority"
                            >
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
                            >
                                <!-- select assign user -->
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
                            type="button"
                            class="btn btn-primary"
                        >
                            Add task
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-backdrop show"></div>
    </Teleport>
</template>
