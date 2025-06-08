<template>
    <div class="hero-section">
        <div class="background-blur"></div>
        <div class="text-content text-center">
            <h4>SOLUSI YANG MEMENUHI KEBUTUHAN KHUSUS INDUSTRI ANDA</h4>
            <h1>Solusi serbaguna untuk kebutuhan khusus berbagai industri</h1>
            <p>
                Tim kami memahami pentingnya operasi Anda. Pengetahuan mereka yang mendalam dan pengalaman industri yang tak tertandingi memastikan bahwa layanan kami diberikan dengan aman dan hemat biaya.
            </p>
        </div>
        <div class="card-container">
            <v-card>
                <v-card-title>
                    <h2>Judul Kartu 1</h2>
                </v-card-title>
                <v-card-text>
                    <p>Ini adalah konten kartu pertama.</p>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-title>
                    <h2>Judul Kartu 2</h2>
                </v-card-title>
                <v-card-text>
                    <p>Ini adalah konten kartu kedua.</p>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-title>
                    <h2>Judul Kartu 3</h2>
                </v-card-title>
                <v-card-text>
                    <p>Ini adalah konten kartu ketiga.</p>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-title>
                    <h2>Judul Kartu 4</h2>
                </v-card-title>
                <v-card-text>
                    <p>Ini adalah konten kartu keempat.</p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup>
// tidak perlu script di sini untuk contoh ini
</script>

<style scoped lang="scss">
.hero-section {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
}

.background-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/cards/construction.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(4px);
    z-index: 1;
}

.text-content {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

    h4 {
        font-size: 1.5rem;
    }

    h1 {
        font-size: 2.5rem;
        margin: 20px 0;
    }

    p {
        font-size: 1rem;
        max-width: 800px;
        margin: auto;
    }
}

.card-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 40px;
    z-index: 2;

    v-card {
        width: 250px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
}
</style>
