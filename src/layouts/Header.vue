<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { IconPlus, IconShare } from '@tabler/icons-vue'

interface NavItem {
    label: string
    to: string
}

const props = withDefaults(
    defineProps<{
        avatarUrl?: string
        navItems?: NavItem[]
    }>(),
    {
        avatarUrl: '/avt.png',
        navItems: () => [
            { label: 'Board', to: '/' },
            { label: 'Activity', to: '/activity' },
        ],
    },
)

const emit = defineEmits<{
    invite: []
    share: []
    logout: []
}>()

const route = useRoute()
const isActive = (to: string) => route.path === to
</script>

<template>
    <header
        class="navbar navbar-expand-md d-print-none"
        data-bs-theme="dark"
    >
        <div class="container-xl">
            <!-- Mobile toggle -->
            <button
                class="navbar-toggler d-md-none order-first"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-menu"
                aria-controls="navbar-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Brand -->
            <div class="navbar-brand navbar-brand-autodark pe-0 pe-md-3">
                <router-link
                    to="/"
                    aria-label="Kanban"
                    class="text-decoration-none"
                >
                    Kanban
                </router-link>
            </div>

            <!-- Right actions -->
            <div class="navbar-nav flex-row order-md-last ms-auto">
                <div class="d-none d-md-flex align-items-center gap-2">
                    <button
                        type="button"
                        class="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
                        @click="emit('invite')"
                    >
                        <IconPlus :size="16" />
                        <span>Invite</span>
                    </button>

                    <button
                        type="button"
                        class="btn btn-primary btn-sm d-flex align-items-center gap-1"
                        @click="emit('share')"
                    >
                        <IconShare :size="16" />
                        <span>Share</span>
                    </button>
                </div>

                <!-- User -->
                <div class="nav-item dropdown ms-2">
                    <a
                        href="#"
                        class="nav-link d-flex lh-1 p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                    >
                        <span
                            class="avatar avatar-sm"
                            :style="{ backgroundImage: `url('${avatarUrl}')` }"
                        ></span>
                    </a>

                    <div
                        class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                        data-bs-theme="light"
                    >
                        <div class="d-md-none">
                            <button
                                type="button"
                                class="dropdown-item"
                                @click="emit('share')"
                            >
                                Share
                            </button>

                            <button
                                type="button"
                                class="dropdown-item"
                                @click="emit('invite')"
                            >
                                Invite
                            </button>

                            <div class="dropdown-divider"></div>
                        </div>

                        <button
                            type="button"
                            class="dropdown-item text-danger"
                            @click="emit('logout')"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <div
                id="navbar-menu"
                class="collapse navbar-collapse"
            >
                <div
                    class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center"
                >
                    <ul class="navbar-nav">
                        <li
                            v-for="item in navItems"
                            :key="item.to"
                            class="nav-item"
                            :class="{ active: isActive(item.to) }"
                        >
                            <router-link
                                :to="item.to"
                                class="nav-link"
                                :aria-current="isActive(item.to) ? 'page' : undefined"
                            >
                                <span class="nav-link-title">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { IconPlus, IconShare } from '@tabler/icons-vue'

interface NavItem {
    label: string
    to: string
}

const props = withDefaults(
    defineProps<{
        avatarUrl?: string
        navItems?: NavItem[]
    }>(),
    {
        avatarUrl: '/avt.png',
        navItems: () => [
            { label: 'Board', to: '/' },
            { label: 'Activity', to: '/activity' },
        ],
    },
)

const emit = defineEmits<{
    invite: []
    share: []
    logout: []
}>()

const route = useRoute()
const isActive = (to: string) => route.path === to
</script>

<template>
    <header
        class="navbar navbar-expand-md d-print-none"
        data-bs-theme="dark"
    >
        <div class="container-xl">
            <!-- Mobile toggle -->
            <button
                class="navbar-toggler d-md-none order-first"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-menu"
                aria-controls="navbar-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Brand -->
            <div class="navbar-brand navbar-brand-autodark pe-0 pe-md-3">
                <router-link
                    to="/"
                    aria-label="Kanban"
                    class="text-decoration-none"
                >
                    Kanban
                </router-link>
            </div>

            <!-- Right actions -->
            <div class="navbar-nav flex-row order-md-last ms-auto">
                <div class="d-none d-md-flex align-items-center gap-2">
                    <button
                        type="button"
                        class="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
                        @click="emit('invite')"
                    >
                        <IconPlus :size="16" />
                        <span>Invite</span>
                    </button>

                    <button
                        type="button"
                        class="btn btn-primary btn-sm d-flex align-items-center gap-1"
                        @click="emit('share')"
                    >
                        <IconShare :size="16" />
                        <span>Share</span>
                    </button>
                </div>

                <!-- User -->
                <div class="nav-item dropdown ms-2">
                    <a
                        href="#"
                        class="nav-link d-flex lh-1 p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                    >
                        <span
                            class="avatar avatar-sm"
                            :style="{ backgroundImage: `url('${avatarUrl}')` }"
                        ></span>
                    </a>

                    <div
                        class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                        data-bs-theme="light"
                    >
                        <div class="d-md-none">
                            <button
                                type="button"
                                class="dropdown-item"
                                @click="emit('share')"
                            >
                                Share
                            </button>

                            <button
                                type="button"
                                class="dropdown-item"
                                @click="emit('invite')"
                            >
                                Invite
                            </button>

                            <div class="dropdown-divider"></div>
                        </div>

                        <button
                            type="button"
                            class="dropdown-item text-danger"
                            @click="emit('logout')"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <div
                id="navbar-menu"
                class="collapse navbar-collapse"
            >
                <div
                    class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center"
                >
                    <ul class="navbar-nav">
                        <li
                            v-for="item in navItems"
                            :key="item.to"
                            class="nav-item"
                            :class="{ active: isActive(item.to) }"
                        >
                            <router-link
                                :to="item.to"
                                class="nav-link"
                                :aria-current="isActive(item.to) ? 'page' : undefined"
                            >
                                <span class="nav-link-title">{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
