<template>
  <v-container>
    <div class="about">
      <h1 class="text-center">This is an Contact form</h1>
      <ContactMe/>
      <TableContact />
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onUpdated, onUnmounted } from 'vue';
import ContactMe from '@/components/ContactMe.vue';
import TableContact from '@/components/TableContact.vue';
import {useContactForm} from "@/composables/useContactForm"

const {errors, submitForm} = useContactForm();
onBeforeMount(()=>{
  console.log("arror = ", errors.value.name);
});
onMounted(()=>{
  console.log("onMounted");
});

</script>
