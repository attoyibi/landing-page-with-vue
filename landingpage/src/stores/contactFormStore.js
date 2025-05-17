import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useContactFormStore = defineStore('contactForm', () => {
    const dataForm = ref([]);
    function submitFormStore(formData) {
        console.log('Mengirim data contact FormState', formData);
        dataForm.value.push(formData);
        console.log('All data', dataForm);

    }
    return { submitFormStore };
});