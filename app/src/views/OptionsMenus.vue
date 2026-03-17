<template>
  <main class="menu">
    <h1>McDonald's Menu</h1>
    <section class="menu-items">
    <MenuItem 
      v-for="item in menuItems" 
      :key="item.id" 
      :item="item" 
      @add="addToCart"
      />
    </section>

    <section class="cart">
      <h2>Cart</h2>
      <p v-if="cart.length === 0">Your cart is empty</p>
      <CartItem
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @increase="increaseQuantity"
        @decrease="decreaseQuantity"
        @remove="removeFromCart"
      />
      <h3 v-if="cart.length > 0">Total: ${{ totalPrice.toFixed(2) }}</h3>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import MenuItem from '../components/MenuItem.vue'
import CartItem from '../components/CartItem.vue'

const menuItems = ref([
  { id: 1, name: 'Big Mac', price: 5.99, category: 'Burger' },
  { id: 2, name: 'McChicken', price: 3.49, category: 'Chicken' },
  { id: 3, name: 'Fries', price: 2.49, category: 'Sides' },
  { id: 4, name: 'McFlurry', price: 3.99, category: 'Dessert' },
])

const cart = ref([])
function addToCart(item) {
  const existing = cart.value.find((i) => i.id === item.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
}
function increaseQuantity(item) {
  item.quantity++
}
function decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removeFromCart(item.id)
  }
}
function removeFromCart(id) {
  cart.value = cart.value.filter((item) => item.id !== id)
}
const totalPrice = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
})
</script>

<style>
.menu {
  max-width: 800px;
  margin: auto;
  font-family: Arial;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.menu-item,
.cart-item {
  border: 2px solid #ffc72c;
  padding: 10px;
  background: white;
}

button {
  background: #da291c;
  color: white;
  border: none;
  padding: 6px 10px;
}
</style>
