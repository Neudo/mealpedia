
<script>
import CardPlat from "@/components/CardPlat.vue";

export default {
  components: {CardPlat},
  data() {
    return {
      category: [],
      selectedCategory: "",
      plats: [],
      platsSend: false,
      errors: []
    }
  },
  mounted() {
    this.fetchCategory()

  },
  methods: {
    async fetchCategory(){
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      const data = await response.json()
      this.category = []
      for (let i = 0; i < data.meals.length; i++) {
        this.category.push(data.meals[i])
      }
    },
    async fetchPlatByCategory(){
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.selectedCategory}`)
      const data = await response.json()
      this.plats = []
      this.errors = []
      if(this.selectedCategory.length){

        if (data.meals === null){
          this.error = "Pas de plat pour cette catégorie, recommencez"
        } else {
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
    <h1>Liste des categories</h1>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="">
            <label for="category">Categories
              <select id="category" v-model="selectedCategory" >
                <option v-for="categorie in category" >{{categorie.strCategory}}</option>
              </select>
            </label>
          </form>
          <button @click.prevent="fetchPlatByCategory" >Afficher les plats</button>
        </div>
      </div>
      <div class="row" v-if="platsSend && !errors.length">
        <div class="col-12">
          <h1>Liste des plats pour la categorie {{ selectedCategory }}</h1>
        </div>
        <div class="row">
            <CardPlat class="col-12 col-md-4" v-for="(plat,index) in plats" :key="index" :plat="plat" ></CardPlat>
        </div>
      </div>
      <div class="row" v-if="errors.length">
        <div class="col-12" v-for="error in errors" key="index">
          {{error}}
        </div>
      </div>
    </div>
  </main>
</template>

