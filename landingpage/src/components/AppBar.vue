<template>
  <div>
    <v-app-bar density="comfortable"
    color="teal-darken-4"
    :elevation="0"
    :expand-on-hover="false"
    >
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    <v-app-bar-title>
      <router-link to="/" style="text-decoration: none; color: inherit;">App title</router-link>
    </v-app-bar-title>
    <v-container class="d-none d-md-flex" style="gap:16px;  justify-content: center;">
      <v-btn text to="/">
      Home
      </v-btn>
      <v-btn text to="/contact">
      Contact Me
      </v-btn>
      <v-btn text to="/products">
      Products
      </v-btn>
      <v-btn text to="/dashboard">
      Dashboard
      </v-btn>
    </v-container>
    <v-btn v-if="!isLogedIn" text to="/login">
      Login
    </v-btn>
    <v-btn v-else icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item>
        <v-list-item-title>Menu</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="item in ['Home', 'Contact', 'Products', 'Dashboard']" :key="item">
        <v-list-item-content>
          <router-link :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`" class="text-decoration-none">
        {{ item }}
          </router-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="!isLogedIn">
        <v-list-item-content>
          <router-link to="/login" class="text-decoration-none">
            Login
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
  
</template>

<script setup>
import { ref } from 'vue';
const isLogedIn = false;
const drawer = ref(false);

</script>