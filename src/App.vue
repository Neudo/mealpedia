<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/random">Aléatoire</RouterLink>
        <RouterLink to="/category">Categories</RouterLink>
        <RouterLink to="/ingredient">Ingredients</RouterLink>
        <RouterLink to="/name">Plats</RouterLink>
        <RouterLink to="/zone">Zones géographique</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

nav a {
  margin-right: 10px;
  text-decoration: none;
  font-size: 22px;
  color: black;
  font-weight: bold;
}

nav{
  padding: 25px;
  text-align: center;

  margin-bottom: 150px;
}

</style>