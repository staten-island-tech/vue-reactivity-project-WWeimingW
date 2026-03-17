<template>
  <main class="menu">
    <h1>McDonald's Menu</h1>
    <section class="menu-items">
      <MenuItem v-for="item in menuItems" :key="item.id" :item="item" @add="addToCart" />
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
  // Burgers
  { id: 1, name: 'Big Mac', price: 5.99, category: 'Burger' },
  { id: 2, name: 'Quarter Pounder with Cheese', price: 6.29, category: 'Burger' },
  { id: 3, name: 'Double Quarter Pounder with Cheese', price: 7.99, category: 'Burger' },
  { id: 4, name: 'Cheeseburger', price: 3.39, category: 'Burger' },
  { id: 5, name: 'Double Cheeseburger', price: 3.99, category: 'Burger' },
  { id: 6, name: 'McDouble', price: 3.89, category: 'Burger' },
  { id: 7, name: 'Hamburger', price: 2.89, category: 'Burger' },

  // Chicken & Fish
  { id: 8, name: 'McChicken', price: 3.49, category: 'Chicken' },
  { id: 9, name: 'McCrispy', price: 5.99, category: 'Chicken' },
  { id: 10, name: 'Spicy McCrispy', price: 5.89, category: 'Chicken' },
  { id: 11, name: 'Deluxe McCrispy', price: 6.79, category: 'Chicken' },
  { id: 12, name: 'Filet-O-Fish', price: 5.49, category: 'Fish' },

  // Nuggets
  { id: 13, name: '4 Piece Chicken McNuggets', price: 3.19, category: 'Nuggets' },
  { id: 14, name: '6 Piece Chicken McNuggets', price: 4.69, category: 'Nuggets' },
  { id: 15, name: '10 Piece Chicken McNuggets', price: 6.99, category: 'Nuggets' },
  { id: 16, name: '20 Piece Chicken McNuggets', price: 10.99, category: 'Nuggets' },

  // Fries & Sides
  { id: 17, name: 'Small Fries', price: 2.49, category: 'Sides' },
  { id: 18, name: 'Medium Fries', price: 3.29, category: 'Sides' },
  { id: 19, name: 'Large Fries', price: 4.99, category: 'Sides' },
  { id: 20, name: 'Apple Slices', price: 1.29, category: 'Sides' },

  // Breakfast
  { id: 21, name: 'Egg McMuffin', price: 4.79, category: 'Breakfast' },
  { id: 22, name: 'Sausage McMuffin with Egg', price: 4.99, category: 'Breakfast' },
  { id: 23, name: 'Bacon Egg & Cheese Biscuit', price: 4.59, category: 'Breakfast' },
  { id: 24, name: 'Sausage Burrito', price: 2.99, category: 'Breakfast' },
  { id: 25, name: 'Hash Browns', price: 2.79, category: 'Breakfast' },
  { id: 26, name: 'Hotcakes', price: 4.49, category: 'Breakfast' },

  // Desserts
  { id: 27, name: 'McFlurry with OREO', price: 4.39, category: 'Dessert' },
  { id: 28, name: "McFlurry with M&M's", price: 4.39, category: 'Dessert' },
  { id: 29, name: 'Vanilla Cone', price: 1.99, category: 'Dessert' },
  { id: 30, name: 'Hot Fudge Sundae', price: 2.99, category: 'Dessert' },
  { id: 31, name: 'Baked Apple Pie', price: 1.89, category: 'Dessert' },
  { id: 32, name: 'Chocolate Chip Cookie', price: 1.29, category: 'Dessert' },

  // Drinks
  { id: 33, name: 'Coca-Cola', price: 1.99, category: 'Drink' },
  { id: 34, name: 'Sprite', price: 1.99, category: 'Drink' },
  { id: 35, name: 'Dr Pepper', price: 1.99, category: 'Drink' },
  { id: 36, name: 'Fanta Orange', price: 1.99, category: 'Drink' },
  { id: 37, name: 'Iced Coffee', price: 2.49, category: 'Drink' },
  { id: 38, name: 'Caramel Frappé', price: 3.99, category: 'Drink' },
  { id: 39, name: 'Mocha Frappé', price: 3.99, category: 'Drink' },
  { id: 40, name: 'Sweet Tea', price: 1.99, category: 'Drink' },
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
