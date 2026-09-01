<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
    <div>
        <Header />

        <main>
            <div class="container-xl">
                <slot />
            </div>
        </main>
    </div>
</template>
