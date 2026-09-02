<script lang="ts" setup>
import { IconMessageCircle, IconCalendarEvent, IconFlag } from '@tabler/icons-vue'
import type { Task } from '@/types/task'
import { formattedDate, priorityInfo } from '@/utils/format'

defineProps<{ task: Task }>()
</script>

<template>
    <div class="card rounded-4 p-3">
        <div class="fw-bold mb-1">{{ task.task_title }}</div>

        <p
            v-if="task.task_description"
            class="task-card__excerpt text-secondary small mb-2"
        >
            {{ task.task_description }}
        </p>

        <div
            v-if="formattedDate(task.created_at) || priorityInfo(task.task_priority)"
            class="d-flex align-items-center gap-2 mb-2"
        >
            <span
                v-if="formattedDate(task.created_at)"
                class="badge bg-azure-lt"
            >
                <IconCalendarEvent :size="14" />
                {{ formattedDate(task.created_at) }}
            </span>

            <span
                v-if="priorityInfo(task.task_priority)"
                class="badge"
                :class="`bg-${priorityInfo(task.task_priority)!.color}-lt`"
            >
                <IconFlag :size="14" />
                {{ priorityInfo(task.task_priority)!.label }}
            </span>
        </div>

        <div class="d-flex align-items-center justify-content-between">
            <div class="avatar-list avatar-list-stacked">
                <span
                    v-for="assigneeId in task.assignee_ids"
                    :key="assigneeId"
                    class="avatar avatar-sm rounded-circle"
                    style="background-image: url(/avt.png)"
                ></span>
            </div>

            <div class="d-flex align-items-center gap-1 text-secondary small">
                <IconMessageCircle :size="14" />
                <span>{{ task.comment_count }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.task-card__excerpt {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
