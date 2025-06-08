<template>
  <v-container class="py-10">
    <v-row align="center" justify="center" class="flex-wrap">
      <!-- Skill Section -->
      <v-col cols="12" md="6">
        <div class="mb-6">
          <div class="section-label mb-2 text-right text-md-left text-primary font-weight-bold">
            MENGAPA MEMILIH KAMI?
          </div>
          <h2 class="font-weight-bold text-center text-md-left mb-8 display-1">
            Fokus kami adalah kepuasan pelanggan, dengan layanan yang personal dan responsif terhadap kebutuhan Anda.
          </h2>
        </div>
        <v-card class="pa-4 mb-4 skill-card" color="#FFD600" flat>
          <span class="font-weight-bold text-grey-darken-4 text-h6">Keterampilan Southeast Engineering Group</span>
        </v-card>
        <div v-for="skill in skills" :key="skill.label" class="mb-4">
          <div class="mb-1 font-weight-medium">{{ skill.label }}</div>
          <v-progress-linear :model-value="skill.value" color="#FFD600" height="24" rounded>
            <template #default>
              <span class="progress-label">{{ skill.value }}%</span>
            </template>
          </v-progress-linear>
        </div>
      </v-col>
      <!-- Image Section -->
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <v-img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Modern House"
          class="rounded-lg elevation-2 skill-image"
          width="100%"
          max-width="450"
          height="320"
          cover
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const skills = [
  { label: 'Kreativitas dan Inovasi', value: 95 },
  { label: 'Pengetahuan Teknik Listrik', value: 95 },
  { label: 'Kemampuan Teknis dan Tukang', value: 100 },
  { label: 'Keterampilan Analisis Struktur', value: 100 },
];
</script>

<style scoped>
.section-label {
  color: #FFD600;
  font-size: 1.1rem;
  letter-spacing: 1px;
}
.skill-card {
  border-radius: 0;
  margin-bottom: 24px;
}
.progress-label {
  color: #333;
  font-weight: bold;
  position: absolute;
  right: 16px;
}
.skill-image {
  background: #fff;
  padding: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
@media (max-width: 960px) {
  .display-1 {
    font-size: 2rem !important;
  }
  .skill-image {
    height: 200px !important;
    max-width: 100% !important;
  }
}
</style>
