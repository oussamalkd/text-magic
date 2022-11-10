<script setup lang="ts">
import { onMounted } from 'vue';
import router from '../router';

onMounted((): void => {
    console.log(router.currentRoute.value.params.id)
})
</script>

<template>

</template>