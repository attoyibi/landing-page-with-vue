<template>
    <v-container>
        <h1>List Products </h1>
            <v-row v-if="products.length">
                <v-col v-for="product in products"
                :key="product.id"
                cols="12"
                sm="6"
                md="4"
                lg="3" 
                xl="2"
                >
                <v-card height="100%" class="d-flex flex-column pa-2" elevation="5">
                    <v-img height="200px" cover class="bg-grey-lighten-2" :src="product.image"></v-img>
                    <v-card-title>{{ product.title }}</v-card-title>
                    <v-card-text>{{ truncateDescription(product.description, 200)}}</v-card-text>
                    <!-- <v-sapce></v-sapce> -->
                    <v-card-actions>
                    <v-btn :to="'/products/'+product.id">
                         Lihat Detail
                    </v-btn>    
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
             <div class="d-flex justify-center" v-else>
                    <v-progress-circular
                    indeterminate
                    color="primary"
                    >
                    </v-progress-circular>
            </div>
            <div>
                <v-pagination
                :length="10"
                ></v-pagination>
            </div>
    </v-container>
</template>

<script setup>
import {ref, onMounted } from 'vue';

const products = ref([]);
onMounted(async()=>{
    //logic
    try{
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        products.value = data;
        console.log("data", data);
    } catch (error){
        console.error("Error", error);
    }
});

const truncateDescription = (description, maxLength) => {
    if(description && description.length > maxLength){
        return description.substring(0, maxLength) + "...";
    }
    console.log("description", description);
    return description;
}
</script>

<style lang="scss" scoped>

</style>