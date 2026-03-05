<template>
  <div>
    <h1>McDonald's Menu</h1>

    <div v-for="item in menuItems" :key="item.id" class="menu-item">
      <h3>{{ item.name }}</h3>
      <p>Category: {{ item.category }}</p>
      <p>Price: ${{ item.price.toFixed(2) }}</p>
      <button @click="addtocart(item)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
const menuItems = ref([
  { id: 1, name: 'Big Mac', price: 5.99, category: 'Burger' },
  { id: 2, name: 'McChicken', price: 3.49, category: 'Chicken' },
  { id: 3, name: 'Fries', price: 2.49, category: 'Sides' },
  { id: 4, name: 'McFlurry', price: 3.99, category: 'Dessert' },
])
</script>

<style>
body {
  font-family: Arial;
  background-color: #fff8e1;
  text-align: center;
}

h1 {
  color: #da291c;
}

.menu-item {
  border: 2px solid #ffc72c;
  background: white;
  padding: 10px;
  margin: 10px;
}
</style>
