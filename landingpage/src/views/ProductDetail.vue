<template>
    <div>
        <v-container grid-list-xs>
            <router-link to="/products" class="text-decoration-none">
                <v-icon>mdi-arrow-left</v-icon>
                Back to Products
            </router-link>
            <v-row class="mt-4">
                <v-col cols="12" md="9" style="border: 1px solid #ccc;">
                    <ProductInformation :product="product" />
                </v-col>
                <v-col cols="12" md="3" style="border: 1px solid #ccc;">
                    <div>
                        <h1>Other Products</h1>
                        <v-card v-for="item in products.slice(0, 5)" :key="item.id" hover class="mx-auto my-2">
                            <v-img :src="item.image" height="50px" />
                            <v-card-title primary-title>
                                {{item.title}}
                            </v-card-title>
                            <v-card-subtitle>
                                {{ item.description }}
                            </v-card-subtitle>
                        </v-card>
                    </div>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ProductInformation from '@/components/ProductInformation.vue';

import { ref, onMounted } from 'vue';
const route = useRoute();
const productId = route.params.id;
const product = ref(null);
console.log(productId);
const products = ref([]);

onMounted(async () => {
    try {
        // Fetch all products
        const allProductsResponse = await fetch('https://fakestoreapi.com/products');
        products.value = await allProductsResponse.json();
        
        // Fetch specific product details
        const productResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
        product.value = await productResponse.json();
        
        console.log("All products: ", products.value);
        console.log("Product detail: ", product.value);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
);

</script>