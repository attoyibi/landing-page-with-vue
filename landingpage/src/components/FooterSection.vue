<template>
  <footer class="bg-grey-darken-3 text-white py-6">
    <v-container>
      <div class="d-flex justify-space-around">
        <div class="d-flex flex-column justify-center align-center">
          <v-row>
            <v-col>
              <v-img class="mx-auto" :src="img_footer" max-width="150"></v-img>
              <p class="my-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus.
              </p>
            </v-col>
          </v-row>
        </div>
        <div class="d-flex">
          <v-row class="d-flex flex-lg-column">
            <v-col v-for="(item, index) in socials" :key="index" cols="12" md="6" lg="3"
              class="d-flex align-center justify-space-between">
              <div class="icon-label-wrapper">
                <v-icon :icon="item.icon" class="mr-2" />
                <p>{{ item.label }}</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-divider class="my-4"></v-divider>
      <p class="text-center">
        Design By :
        <a class="text-white" href="https://www.linkedin.com/in/muhammad-muchson-attoyibi-7024911b8/">Muchson</a>
      </p>
    </v-container>
  </footer>
</template>

<script>
import { ref } from 'vue'
import img_footer from '../assets/images/img-footer.png'

export default {
  setup() {
    const socials = ref([
      { icon: 'mdi-instagram', label: 'Instagram' },
      { icon: 'mdi-facebook', label: 'Facebook' },
      { icon: 'mdi-twitter', label: 'Twitter' },
      { icon: 'mdi-linkedin', label: 'LinkedIn' },
    ])

    return {
      img_footer,
      socials,
    }
  },
}
</script>

<style scoped>
.icon-label-wrapper {
  max-width: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 6px;

}
</style>
