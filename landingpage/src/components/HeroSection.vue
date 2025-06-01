<template>
    <v-container fluid class="hero-section">
      <v-row class="hero-content d-flex justify-center justify-lg-start">
        <!-- Kiri: Teks -->
        <v-col cols="12" md="6" class="hero-text text-center text-lg-start">
          <h1 class="text-h2 font-weight-bold">
            Hi, I'm <span class="text-primary">Muchson</span>
          </h1>
          <p class="text-body-1">
            A Front-End Engineer passionate about building scalable, high-performance applications.
          </p>
          <div class="mt-5 d-flex justify-center justify-lg-start" style="gap:16px">
            <v-btn color="primary" size="large" variant="flat">Download CV</v-btn>
            <v-btn color="secondary" size="large" variant="outlined">Contact Me</v-btn>
          </div>
        </v-col>
  
        <!--  Kanan: Gambar -->
        <v-col cols="12" md="6" class="d-flex justify-center justify-md-start">
          <v-img
            class="hero-image"
            :src="profileImage"
            alt="Profile Picture"
            width="200"
            height="200"
            
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  // Pastikan gambar diimpor dengan benar
  import profileImage from '@/assets/images/profile.jpeg';
  
  // Jika terjadi masalah, bisa pakai:
  // const profileImage = require('@/assets/images/profile.jpeg');
  </script>
  
  <style scoped lang="scss">
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #1e1e2d, #2a2a3c);
    color: white;
    padding: 40px 20px;
  }
  
  .hero-content {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
  
  .hero-text {
    max-width: 600px;
  }
  
  .text-primary {
    color: #ffcc00;
  }
  
  .hero-image {
    border-radius: 50%;
  }
  </style>
  