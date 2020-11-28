<template>
    <div class="w-screen h-screen">
        <Sidebar />

        <main>
            <router-view />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Sidebar from '../src/components/Sidebar.vue';

export default defineComponent({
    components: { Sidebar },
});
</script>
