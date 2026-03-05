<template>
  <div>
    <h1>McDonald's Menu</h1>

    <div v-for="item in menuItems" :key="item.id" class="menu-item">
      <h3>{{ item.name }}</h3>
      <p>Category: {{ item.category }}</p>
      <p>Price: ${{ item.price.toFixed(2) }}</p>
      <button @click="addtocart(item)">Add to Cart</button>
    </div>

    <h2>Cart</h2>
    <div v-if="cart.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <h4>{{ item.name }}</h4>
      <p>${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
      <button @click="item.quantity++">+</button>
      <button @click="decreasequantity(item)">-</button>
      <button @click="removefromcart(item.id)">Remove</button>
    </div>

    <h3 v-if="cart.length > 0">Total: ${{ totalprice.toFixed(2) }}</h3>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const menuItems = ref([
  { id: 1, name: 'Big Mac', price: 5.99, category: 'Burger' },
  { id: 2, name: 'McChicken', price: 3.49, category: 'Chicken' },
  { id: 3, name: 'Fries', price: 2.49, category: 'Sides' },
  { id: 4, name: 'McFlurry', price: 3.99, category: 'Dessert' },
])

const cart = ref([])

const addtocart = (item) => {
  const existingItem = cart.value.find((i) => i.id === item.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
}

const decreasequantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removefromcart(item.id)
  }
}

const removefromcart = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id)
}

const totalprice = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
})
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

.cart-item {
  border: 2px solid #da291c;
  background: white;
  padding: 10px;
  margin: 10px;
}

button {
  background-color: #da291c;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #b71c1c;
}
</style>
