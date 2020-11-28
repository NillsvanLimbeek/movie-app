<template>
    <nav class="w-4 h-full border-r border-gray-900">
        <ul>
            <SidebarBtn v-for="title in titles" :key="title" :title="title" />
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SidebarBtn from './SidebarBtn.vue';

export default defineComponent({
    name: 'Sidebar',

    components: { SidebarBtn },

    setup() {
        const titles = ['#1', '#2', '#3'];

        return {
            titles,
        };
    },
});
</script>
