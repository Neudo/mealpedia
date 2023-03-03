<script>
export default {
  name: "CardPlat",
  data(){
    return{

    }
  },
  props:{
    plat: {
      type: Object,
      required: true
    }
  }
}


</script>

<template>
  <div class="wrapper-card-plat">
    <div class="card-plat">
      <div class="card-plat-header">
        <img :src="plat.strMealThumb" alt="">
      </div>
      <div class="card-plat-body">
        <h2>{{plat.strMeal}}</h2>
        <ul v-if="plat['strCategory']" >
          <li>{{ plat.strCategory}}</li>
          <li>{{ plat.strArea}}</li>
        </ul>
      </div>
    </div>
    <div v-if="plat['strIngredient1']" class="card-plat-ingredients col-6">
      <h2>Liste des ingrédients</h2>
      <ul v-for="index in 20" :key="index" >
        <li v-if="plat['strIngredient'+index]" >
          {{ plat['strIngredient'+index] }} ({{plat['strMeasure'+index]}})
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

.wrapper-card-plat{
  display: flex;
  margin-bottom: 15px;
}
.card-plat{
  padding: 10px;
  background-color: white;
}
.card-plat-body{
  padding: 10px 0;
}


ul li {
  margin: 10px 0;
}

img{
  width: 100%;
}

.card-plat-ingredients{
  background-color: white;
  padding: 30px 20px;
}

</style>
