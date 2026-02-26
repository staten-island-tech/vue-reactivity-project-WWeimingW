<template>
  <div>
    <h1>McDonald's Menu</h1>

    <div v-for="item in menuItems" :key="item.id" class="menu-item">
      <h3>{{ item.name }}</h3>
      <p>Category: {{ item.category }}</p>
      <p>Price: ${{ item.price.toFixed(2) }}</p>
      <button @click="store.addToCart(item)">Add to Cart</button>
    </div>

    <h2>Cart</h2>
    <div v-if="store.cart.length === 0">Cart is empty</div>

    <div v-else>
      <div v-for="item in store.cart" :key="item.id">
        {{ item.name }} x {{ item.quantity }} - ${{ (item.price * item.quantity).toFixed(2) }}
        <button @click="store.removeFromCart(item.id)">Remove</button>
      </div>

      <h3>Total: ${{ store.total.toFixed(2) }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../stores/store.js'

const menuItems = ref([
  { id: 1, name: 'Big Mac', price: 5.99, category: 'Burger' },
  { id: 2, name: 'McChicken', price: 3.49, category: 'Chicken' },
  { id: 3, name: 'Fries', price: 2.49, category: 'Sides' },
  { id: 4, name: 'McFlurry', price: 3.99, category: 'Dessert' },
])
</script>

<style>
.menu-item {
  margin-bottom: 20px;
}
.cart-item {
  margin-bottom: 10px;
}
button {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
<!-- absolute ref top left 50 50 how to place items on top -->
