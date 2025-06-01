<template>
  <v-app-bar density="comfortable"
  color="teal-darken-4"
  >
    <v-app-bar-title > v app bar</v-app-bar-title>
      <c-container class="d-flex" style="gap:16px">
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
      </c-container>
    <v-spacer></v-spacer>
    <v-btn v-if="!isLogedIn" text to="/login">
      Login
    </v-btn>
    <v-btn v-else icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>

</template>

<script setup>
  const isLogedIn = false;
</script>