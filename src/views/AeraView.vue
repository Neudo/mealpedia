
<script>
import CardPlat from "@/components/CardPlat.vue";

export default {
  components: {CardPlat},
  data() {
    return {
      areas: [],
      selectedArea: "",
      plats: [],
      platsSend: false,
      errors: []
    }
  },
  mounted() {
    this.fetchArea()

  },
  methods: {
    async fetchArea(){
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      const data = await response.json()
      this.areas = []
      for (let i = 0; i < data.meals.length; i++) {
        this.areas.push(data.meals[i])
      }
    },
    async fetchPlatByArea(){
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.selectedArea}`)
      const data = await response.json()
      this.plats = []
      this.errors = []
      if(this.selectedArea.length){
        if (data.meals === null){
          this.error = "Pas de plat pour cette zone, recommencez"
        } else {
          this.platsSend = true
          for (let i = 0; i < data.meals.length; i++) {
            this.plats.push(data.meals[i])
          }
        }

      } else{
        this.errors.push("Merci de sélectionner une zone")
      }
    }
  }
}
</script>

<template>
  <main>
    <h1>Liste des zones géographique</h1>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="">
            <label for="category">Zone
              <select id="category" v-model="selectedArea" >
                <option v-for="area in areas" >{{area.strArea}}</option>
              </select>
            </label>
          </form>
          <button @click.prevent="fetchPlatByArea" >Afficher les plats</button>
        </div>
      </div>
      <div class="row" v-if="platsSend && !errors.length">
        <div class="col-12">
          <h1>Liste des plats pour la zone déographique {{ selectedArea }}</h1>
        </div>
        <div class="row">
          <CardPlat class="col-12 col-md-4" v-for="(plat,index) in plats" :key="index" :plat="plat" ></CardPlat>
        </div>
      </div>
    </div>
    <div class="row" v-if="errors.length">
      <div class="col-12" v-for="error in errors" key="index">
        {{error}}
      </div>
    </div>
  </main>
</template>

