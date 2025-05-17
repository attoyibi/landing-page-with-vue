<template>
    <v-container class="py-10" max-width="800">
        <v-card class="pa-6" elevation="4">
            <v-card-title>
                <h2> ✨ Let's Connect!</h2>
                <v-card-subtitle > Punya ide menarik atau sekadar ingin ngobrol? Kirim pesan ke saya! 🚀</v-card-subtitle>
            </v-card-title>
            <v-form @submit.prevent="handleSubmit" ref="formRef" v-model="isFormValid">
            <v-text-field
            label="Name"
            placeholder="Name"
            required
            :rules="[rules.required]"
            v-model="formState.name"
            >
            </v-text-field>
            <v-text-field
            label="Email"
            v-model="formState.email"
            :rules="[rules.required, rules.email]"
            >
            </v-text-field>

            <v-textarea
            v-model="formState.message"
            label="Message"
            placeholder="Write something..."
            :rules="[rules.required]"
            auto-grow
            >
            </v-textarea>
            <v-btn :disabled="!isFormValid" type="submit">Kirim Pesan</v-btn>
        </v-form>   
    </v-card>
    <v-snackbar 
    v-model="snackbar.show"
    location="top"
    timeout="3000"
    :color="snackbar.color"
    rounded
    >
        {{ snackbar.text }}
    </v-snackbar>
    </v-container>
</template>

<script setup>
import {ref} from 'vue';
import { useContactForm } from '@/composables/useContactForm';
const formRef = ref(null);
const formState = ref({
    name: '',
    email: '',
    message: ''
});

const snackbar = ref(
    {
        show:false,
        text: '',
        color: 'success'
    }
);
const isFormValid = ref(false);
const {errors, submitForm} = useContactForm();
const rules = {
    required : v=> !!v || 'Field ini wajib diisi.',
    email: v => /.+@.+\..+/.test(v) || 'Email tidak valid.'
}

function handleSubmit(){
    console.log("error dari composable = ", errors.value);
    console.log("FormRef = ", formRef.value.validate());
    if (formRef.value.validate()) {
        submitForm(formState);
        snackbar.value ={
        show: true,
        text: 'Pesan berhasil dikirim!',
        color: 'success'
        }
    } else{
        console.warn('Form tidak valid:', errors.value)
    }
}

</script>

<style lang="scss" scoped>

</style>
