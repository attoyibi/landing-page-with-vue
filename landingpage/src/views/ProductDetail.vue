<template>
<h1>ini product Detail</h1>
<p>ini id : {{ productId }}</p>

<p v-if="product"> {{ product.category }}</p>
    <v-progress-circular 
    v-else
    indeterminate
    color="primary"
    >

    </v-progress-circular>
</template>

<script setup>
import { useRoute} from 'vue-router';

import {ref, onMounted} from 'vue';
const route = useRoute();
const productId = route.params.id;
const product = ref(null);
console.log(productId);
onMounted( async () =>{
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        product.value = await response.json()
        console.log("ini product : ", product);
    } catch(error){
        console.error('Error fetching product : ', error);
    }
}
);

</script>