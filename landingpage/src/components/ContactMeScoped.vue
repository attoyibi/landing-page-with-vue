<script setup>
import { ref, computed, defineEmits } from 'vue';

// State
const name = ref('');
const email = ref('');
const message = ref('');
const errors = ref({});
const submitted = ref(false);

// Emit event
const emit = defineEmits(['formSubmitted']);

// Validasi Email
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

// Computed: Cek validitas form
const isFormValid = computed(() => name.value && validateEmail(email.value) && message.value);

// Submit handler
const handleSubmit = () => {
  errors.value = {}; // Reset error sebelum validasi

  if (!name.value) errors.value.name = 'Nama wajib diisi';
  if (!email.value) {
    errors.value.email = 'Email wajib diisi';
  } else if (!validateEmail(email.value)) {
    errors.value.email = 'Format email tidak valid';
  }
  if (!message.value) errors.value.message = 'Pesan wajib diisi';

  if (Object.keys(errors.value).length === 0) {
    emit('formSubmitted', { name: name.value, email: email.value, message: message.value });
    submitted.value = true;

    setTimeout(() => {
      name.value = '';
      email.value = '';
      message.value = '';
      submitted.value = false;
    }, 3000);
  }
};
</script>

<template>
  <div class="container">
    <h2 class="title">✨ Let's Connect!</h2>
    <p class="subtitle">Punya ide menarik atau sekadar ingin ngobrol? Kirim pesan ke saya! 🚀</p>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="input-group">
        <label for="name">Nama</label>
        <input v-model.trim="name" id="name" type="text" placeholder="John Doe" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>

      <div class="input-group">
        <label for="email">Email</label>
        <input v-model.trim="email" id="email" type="email" placeholder="john@example.com" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="input-group">
        <label for="message">Pesan</label>
        <textarea v-model.trim="message" id="message" rows="4" placeholder="Tulis sesuatu..."></textarea>
        <p v-if="errors.message" class="error">{{ errors.message }}</p>
      </div>

      <button type="submit" :disabled="!isFormValid" class="submit-button">
        Kirim Pesan 🚀
      </button>
    </form>

    <div v-if="submitted" class="success-message">
      ✅ Pesan berhasil dikirim! Saya akan segera merespons. 🙌
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #333;
}
.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group label {
  font-weight: 600;
  margin-bottom: 5px;
}
.input-group input,
.input-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}
.input-group input:focus,
.input-group textarea:focus {
  border-color: #007bff;
  outline: none;
}
.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
}
.submit-button {
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}
.submit-button:hover {
  background: #0056b3;
}
.submit-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.success-message {
  text-align: center;
  color: #28a745;
  font-weight: bold;
  background: #d4edda;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
