<template>
  <v-app>
    <AppBar />
    <v-main>
      <HomeView />
      <DataBinding />
    </v-main>
  </v-app>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
import AppBar from '@/components/AppBar.vue'
import DataBinding from '@/components/DataBinding.vue'
</script>

<style lang="scss" scoped></style>
