<script lang="ts" setup>
import type { KanbanColumn } from '@/types/task'
import { IconDots } from '@tabler/icons-vue'
import TaskCard from './TaskCard.vue'

defineProps<{ column: KanbanColumn }>()
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
    </div>
</template>

<style lang="scss" scoped>
.task-column__settings {
    color: var(--tblr-secondary);
}
</style>
