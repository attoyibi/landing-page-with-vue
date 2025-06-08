<template>
    <div v-if="product">
        <h2>{{ product.title }}</h2>
        <div style="background-color: #f0f0f0;">
            <v-img :src="product.image" height="200px" />
        </div>
        <p style="font-weight: bold;">Category: {{ product.category }}</p>
        <p>{{ product.description }}</p>
        <v-img :src="product.image" height="100" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae libero, porro impedit soluta neque consequuntur minus eius dolores sit nobis vero ab tempore error ullam, eligendi dolorum perspiciatis veniam sed voluptas consectetur? Dicta cupiditate quisquam excepturi debitis enim unde illum expedita, accusantium quibusdam quasi voluptate doloremque nisi esse velit dolor id, nesciunt explicabo nostrum eius? Labore quam, excepturi illo saepe esse voluptates? Dolorem, at nisi rerum enim beatae incidunt odit sint exercitationem optio asperiores magni possimus id vitae expedita inventore qui neque natus atque ipsum amet obcaecati aliquid! Dolores consectetur sequi similique maiores accusantium officiis magni voluptas quisquam! Facilis.</p>
        <v-img :src="product.image" height="100" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae libero, porro impedit soluta neque consequuntur minus eius dolores sit nobis vero ab tempore error ullam, eligendi dolorum perspiciatis veniam sed voluptas consectetur? Dicta cupiditate quisquam excepturi debitis enim unde illum expedita, accusantium quibusdam quasi voluptate doloremque nisi esse velit dolor id, nesciunt explicabo nostrum eius? Labore quam, excepturi illo saepe esse voluptates? Dolorem, at nisi rerum enim beatae incidunt odit sint exercitationem optio asperiores magni possimus id vitae expedita inventore qui neque natus atque ipsum amet obcaecati aliquid! Dolores consectetur sequi similique maiores accusantium officiis magni voluptas quisquam! Facilis.</p>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true,
    }
});
</script>

<style lang="scss" scoped>

</style>