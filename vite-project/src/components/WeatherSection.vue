<template>
    <div>
        <div v-for="day in forecast">
            {{ day.t }}
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        forecast: {
            type: Array,
            required: true,
            default: () => []
        },
    })

</script>