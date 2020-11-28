<template>
    <button @click="clickButton">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const clickButton = () => {
            console.log(`Clicked ${props.title}`);
        };

        return {
            clickButton,
        };
    },
});
</script>
