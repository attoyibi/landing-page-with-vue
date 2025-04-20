<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout || 'DefaultLayout'; // Default to a div if no layout is specified
});
</script>

<style lang="scss" scoped></style>
