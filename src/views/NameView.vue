<script>
import CardPlat from "@/components/CardPlat.vue";

export default {
  components: {CardPlat},
  data() {
    return {
      plat: {},
      platName: "",
      platSend: false,
      error: []
    }
  },
  methods: {
    async fetchSearchedPlat() {
      let platName = this.platName
      this.error = []

      if (platName.length){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${platName}`)
        const data = await response.json()
        if (data.meals === null){
          this.error = "Plat non trouvé, recommencez"
        } else {
          this.platSend = true
          this.plat = data.meals[0]
        }
      }

      else {
        this.error = "Merci d'entrer un nom de plat"
      }
    }
  }
}

</script>

<template>
  <main>
    <h1>Rechercher un plat</h1>

    <form action="" @submit.prevent="fetchSearchedPlat">
      <label for="name"> Nom du plat
        <input type="text" name="name" id="name" v-model="platName" >
      </label>

      <button>Rechercher</button>
    </form>

    <div class="container">
      <div class="row">
        <div class="col-12" v-if="platSend && !error.length ">
          <CardPlat  :plat="plat"></CardPlat>
        </div>
        <div class="col-12" v-if="error.length">
          {{error}}
        </div>
      </div>
    </div>
  </main>
</template>
