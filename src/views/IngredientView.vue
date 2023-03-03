<script>
import CardPlat from "@/components/CardPlat.vue";

export default {
  components: {CardPlat},
  data() {
    return {
      ingredients: [],
      selectedIngredient: "",
      errors: [],
      platsSend: false,
      plats: [],
    }
  },
  mounted() {
    this.fetchIngredients()
  },
  methods: {
    async fetchIngredients() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      const data = await response.json()
      this.ingredients = []
      for (let i = 0; i < data.meals.length; i++) {
        this.ingredients.push(data.meals[i])
      }
    },
    async fetchPlatByIngredient(){
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.selectedIngredient}`)
      const data = await response.json()
      this.plats = []
      this.errors = []
      if(this.selectedIngredient.length){
        if (data.meals === null){
          this.error = "Pas de plat pour cette catégorie, recommencez"
        } else {
          console.log(this.platsSend)
          this.platsSend = true
          for (let i = 0; i < data.meals.length; i++) {
            this.plats.push(data.meals[i])
          }
        }
      } else{
        this.errors.push("Merci de sélectionner une catégorie")
      }
    }
  }
}

</script>

<template>
  <main>
    <h1>Rechercher un Ingrédient</h1>

    <form action="" @submit.prevent="fetchIngredients">
      <label for="name"> Nom de l'ingrédient
        <select id="ingredients" v-model="selectedIngredient" >
          <option v-for="ingredient in ingredients" >{{ingredient.strIngredient}}</option>
        </select>
      </label>
      <button @click.prevent="fetchPlatByIngredient" >Afficher les plats</button>
    </form>

    <div class="container">
      <div class="row" v-if="platsSend && !errors.length">
        <div class="col-12">
          <h1>Liste des plats pour l'ingrédient {{ selectedIngredient }}</h1>
        </div>
        <div class="row">
            <CardPlat class="col-12 col-md-4" v-for="(plat,index) in plats" :key="index" :plat="plat" ></CardPlat>
        </div>
      </div>
      <div class="col-12" v-if="errors.length">
        {{errors}}
      </div>
    </div>
  </main>
</template>
