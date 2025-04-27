import { ref, computed, watch } from 'vue';
import { useContactFormStore } from '@/stores/contactFormStore'
export function useContactForm() {
    const { submitFormStore } = useContactFormStore();

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