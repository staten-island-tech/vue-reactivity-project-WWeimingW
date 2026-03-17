<template>
  <RouterView />
  <!-- <button @click="router.push('/option')">
    Go to Options
  </button> -->
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();
router.push('/option');
</script>