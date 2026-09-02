<script lang="ts" setup>
import type { KanbanColumn } from '@/types/task'
import { IconDots } from '@tabler/icons-vue'

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

        <div class="task-column__body"></div>
    </div>
</template>

<style lang="scss" scoped>
.task-column {
    width: 280px;
    flex-shrink: 0;
}
</style>
