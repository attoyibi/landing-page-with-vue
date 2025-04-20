<template>
    <div class="full-height">
        <v-container fluid class="d-flex flex-column justify-center align-center text-center fill-height">
            <h1>404</h1>
            <p>Oops! Halaman yang kamu cari tidak ditemukan.</p>
            <v-btn color="primary" to="/">Kembali ke Beranda</v-btn>
        </v-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.full-height{
    height: 100vh;
    height: 100%;

    overflow: hidden; // Mencegah overflow konten
}
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden; // Hide overflow on both html and body
}
</style>