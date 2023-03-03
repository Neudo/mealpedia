
<script>
import CardPlat from "@/components/CardPlat.vue";

export default {
  components: {CardPlat},
  data() {
    return {
      plat: {},
      title: "Plats aléatoires"
    }
  },
  mounted() {
    this.fetchRandomPlat()
  },
  methods: {
    async fetchRandomPlat() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      const data = await response.json()
      this.plat = data.meals[0]
      console.log(this.plat)
    }
  }
}
</script>

<template>
  <main>
    <h1>{{ title }}</h1>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 offset-2">
          <CardPlat :plat="plat" ></CardPlat>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button @click="fetchRandomPlat" >Générer nouveau plat</button>
        </div>
      </div>
    </div>
  </main>
</template>

