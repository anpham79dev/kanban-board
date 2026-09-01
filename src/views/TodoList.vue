<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import ViewSwitcher from './partials/ViewSwitcher.vue'
import TaskList from './partials/TaskList.vue'
</script>

<template>
    <BaseLayout>
        <div class="mt-4">
            <div class="d-flex justify-content-between flex-wrap">
                <h1>Task list</h1>

                <ViewSwitcher />
            </div>

            <div>
                <TaskList />
            </div>
        </div>
    </BaseLayout>
</template>
