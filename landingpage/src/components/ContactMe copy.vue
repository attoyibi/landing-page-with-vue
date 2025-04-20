<template>
    <div>
      <h2>✨ Let's Connect!</h2>
      <p>Punya ide menarik atau sekadar ingin ngobrol? Kirim pesan ke saya! 🚀</p>
  
      <form @submit.prevent="handleSubmit">
        <!-- Input Name -->
        <div>
          <label for="name">Name:</label>
          <input
            id="name"
            v-model="formState.name"
            type="text"
            placeholder="Your name"
          />
          <p v-if="formState.name">One way Data binding: {{ formState.name }}</p>
          <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>
  
        <!-- Input Email -->
        <div>
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="formState.email"
            type="email"
            placeholder="Your email"
          />
          <p v-if="formState.email">Two way Data binding: {{ formState.email }}</p>
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>
  
        <!-- Submit Button -->
        <button type="submit" :disabled="isFormInvalid">Kirim Pesan</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const emit = defineEmits(['submit']);
  
  const formState = ref({
    name: '',
    email: '',
  });
  
  const errors = ref({
    name: '',
    email: '',
  });
  
  // Validasi otomatis saat input berubah
  watch(formState, (newVal) => {
    errors.value.name = newVal.name.length < 3 ? "Nama harus minimal 3 karakter" : "";
    errors.value.email = /\S+@\S+\.\S+/.test(newVal.email) ? "" : "Email tidak valid";
  }, { deep: true });
  
  // Validasi form menggunakan computed
  const isFormInvalid = computed(() => {
    return !formState.value.name || !formState.value.email || errors.value.name || errors.value.email;
  });
  
  function handleSubmit() {
    if (isFormInvalid.value) return;
  
    emit('submit', { ...formState.value });
    console.log("Form submitted:", formState.value);
  
    // Reset form setelah submit
    formState.value.name = '';
    formState.value.email = '';
  }
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-size: 0.875rem;
  }
  </style>
  