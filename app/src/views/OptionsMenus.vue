<template>
  <div>
    <h1>McDonald's Menu</h1>

    <div v-for="item in menuItems" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>Category: {{ item.category }}</p>
      <p>Price: ${{ item.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { id: 1, name: 'Big Mac', price: 5.99, category: 'Burger' },
  { id: 2, name: 'McChicken', price: 3.49, category: 'Chicken' },
  { id: 3, name: 'Fries', price: 2.49, category: 'Sides' },
  { id: 4, name: 'McFlurry', price: 3.99, category: 'Dessert' },
])
</script>

<style scoped></style>
<!-- absolute ref top left 50 50 how to place items on top -->
