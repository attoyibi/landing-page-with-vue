<template>
    <div>
      <h2>Login</h2>
      <!-- Form login -->
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Logika autentikasi
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        // Setelah login berhasil, arahkan ke halaman dashboard
        this.$router.push('/dashboard');
        localStorage.setItem('auth', 'true') // Simulasi login
        router.push('/dashboard') // Redirect ke Dashboard setelah login  
    }
    }
  };
  </script>
  