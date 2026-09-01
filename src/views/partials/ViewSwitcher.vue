<script lang="ts" setup>
import { switcherViewOption, type ViewType } from '@/types/base'
import { ref } from 'vue'

const currentView = ref<ViewType>('list')
</script>

<template>
    <div
        class="view-switcher d-flex align-self-center"
        role="group"
        aria-label="View mode"
    >
        <template
            v-for="view in switcherViewOption"
            :key="view.value"
        >
            <input
                :id="`view-${view.value}`"
                v-model="currentView"
                type="radio"
                class="btn-check"
                name="view-mode"
                :value="view.value"
                autocomplete="off"
            />

            <label
                class="btn btn-outline-secondary rounded-pill"
                :class="{ active: currentView === view.value }"
                :for="`view-${view.value}`"
            >
                <component
                    :is="view.icon"
                    :size="13"
                    :stroke-width="2"
                    class="flex-shrink-0"
                />
                <span>{{ view.label }}</span>
            </label>
        </template>
    </div>
</template>

<style scoped>
.view-switcher {
    gap: 8px;
}

.view-switcher .btn {
    gap: 5px;
    font-size: 12px;
    white-space: nowrap;
    padding: 6px 14px !important;
    color: var(--tblr-secondary);
    border-color: var(--tblr-border-color);
}

.view-switcher .btn.active {
    background-color: var(--tblr-primary);
    border-color: var(--tblr-primary);
    color: #fff;
}

.view-switcher .btn:hover {
    background-color: var(--tblr-primary);
    border-color: var(--tblr-primary);
    color: #fff;
}
</style>
