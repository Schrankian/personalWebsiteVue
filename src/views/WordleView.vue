<script setup lang="ts">
import Loader from '../components/loader.vue'
</script>

<template>
    <Loader/>
    <iframe src="/wordle/game/"></iframe>
</template>

<style scoped>
iframe {
    position: fixed;
    overflow: hidden;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    border: none;
}
</style>