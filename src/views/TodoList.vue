<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import ViewSwitcher from './partials/ViewSwitcher.vue'
import TaskList from './partials/TaskList.vue'
import { useTaskStore } from '@/store/taskStore.ts'

const { columns } = useTaskStore()
</script>

<template>
    <BaseLayout>
        <div class="mt-4">
            <div class="d-flex justify-content-between flex-wrap">
                <h1>Task list</h1>

                <ViewSwitcher />
            </div>

            <div class="d-flex justify-content-between mt-3">
                <TaskList
                    v-for="column in columns"
                    :key="column.id"
                    :column="column"
                />
            </div>
        </div>
    </BaseLayout>
</template>
