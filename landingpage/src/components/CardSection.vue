    <template>
    <v-container class="my-6">
        <div class="text-center ma-5">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, maxime.</p>
        </div>
        <v-row class="justify-center">
            <v-col v-for="item in items" :key="item" cols="12" md="6" lg="4" class="d-flex justify-center">
                <v-card class="ma-2" max-width="100%">
                    <v-img
                    height="200px"
                    alt="Card Image"
                    style="background-color: aqua;"
                    >
                </v-img>
                <v-card-title>Card title {{ item }}</v-card-title>
                <v-card-text>{{ truncateText(cardText, 20) }}</v-card-text>
            </v-card>
        </v-col>

        </v-row>
    </v-container>
</template>
<script setup>
import img1 from "@/assets/images/cards/construction.jpg"
const items = 6;

const cardText  = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ipsam, incidunt ut harum autem voluptatem optio provident repellat fuga animi repellendus dignissimos sint minus, id beatae excepturi nostrum mollitia doloribus quod et! Soluta libero delectus quam blanditiis recusandae modi beatae."
function truncateText(text, wordLimit){
    const words = text.split(" ");
    if(words.length > wordLimit){
        return words.slice(0, wordLimit).join(" ") + "...";
    }
}

</script>

<style lang="scss" scoped>

</style>