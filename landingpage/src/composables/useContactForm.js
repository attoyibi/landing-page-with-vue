import { ref, computed, watch } from 'vue';
import { contactFormStore } from '@/stores/contactFormStore'
export function useContactForm() {
    const { submitFormStore } = contactFormStore();

    const errors = ref({
        name: 'error name default',
        email: 'error email defailt'
    });
    function submitForm(formState) {
        console.log("submitFormComposate = ", formState.value);
        submitFormStore(formState.value);
    }

    return {
        errors,
        submitForm
    }
}