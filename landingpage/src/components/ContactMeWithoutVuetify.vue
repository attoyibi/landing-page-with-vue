<template>
    <div>

        <div>
            <h2> ✨ Let's Connect!</h2>
            <p> Punya ide menarik atau sekadar ingin ngobrol? Kirim pesan ke saya! 🚀</p>
        </div>
        f form
        <v-form>
           <h1>title v form</h1>
            <v-text-field
            placeholder="v-text-field"
            >

            </v-text-field>
        </v-form>

        <form @submit.prevent="handleSubmit">
            <div>
                <!-- one way data binding -->
                <label>Name : </label>
                <input id="name" :value="formState.name" type="text" placeholder="Your name" @input="formState.name = $event.target.value"/>
                <p>One way Data binding data : {{ formState.name }}</p>
            </div>
            <div>
                <label>Email : </label>
                <!-- two way data binding -->
                <input id="email" v-model="formState.email" type="email" placeholder="Your email"/>
                <!-- data  update realtime karen two way data binding -->
                
                <p>Two way Data binding data : {{ formState.email }}</p>
                
            </div>
            <button type="submit" class="submit-button">Kirim Pesan</button>
        </form>   
    </div>
</template>

<script setup>
import {ref} from 'vue';
import { useContactForm } from '@/composables/useContactForm';

const formState = ref({
    name: '',
    email: '',
    message: ''
});
const {errors, submitForm} = useContactForm(formState);

function handleSubmit(){
    console.log("error dari composable = ", errors.value);
    submitForm();
}

</script>

<style lang="scss" scoped>

</style>