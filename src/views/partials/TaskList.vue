<script lang="ts" setup>
import type { KanbanColumn } from '@/types/task'
import { IconDots, IconPlus } from '@tabler/icons-vue'
import TaskCard from './TaskCard.vue'
import { ref } from 'vue'
import AddTaskModal from './form/AddTaskModal.vue'

const props = defineProps<{ column: KanbanColumn }>()

const isOpen = ref<boolean>(false)

const openModal = () => {
    isOpen.value = true
}

const closeModal = () => {
    isOpen.value = false
}
</script>

<template>
    <div class="task-column">
        <div class="d-flex align-items-center justify-content-between">
            <div class="fw-bold">{{ column.step_title }}</div>

            <div class="task-column__settings">
                <IconDots
                    class="flex-shrink-0 cursor-pointer"
                    size="18"
                />
            </div>
        </div>

        <div class="d-flex flex-column gap-3 mt-3">
            <TaskCard
                v-for="task in column.tasks"
                :key="task.id"
                :task="task"
            />
        </div>

        <button
            @click="openModal()"
            class="btn btn-outline-primary p-0 w-100 rounded-5"
        >
            <IconPlus size="16" />
            Add task
        </button>

        <AddTaskModal
            v-if="isOpen"
            @close="closeModal"
        />
    </div>
</template>

<style lang="scss" scoped>
.task-column__settings {
    color: var(--tblr-secondary);
}
</style>
