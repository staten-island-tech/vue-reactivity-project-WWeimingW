<template>
  <div>
    <h1>McDonald's Menu</h1>

    <div v-for="item in menuItems" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>Category: {{ item.category }}</p>
      <p>Price: ${{ item.price }}</p>
      <button @click="addToCart(item)">Add to Cart</button>
    </div>
    <div v-if="cart.length > 0" class="cart">
      <h2>Shopping Cart</h2>

      <div v-for="item in cart" :key="item.id" class="cart-item">
        <h4>{{ item.name }}</h4>

        <p>
          Quantity:
          <button @click="decreaseQuantity(item)">-</button>
          {{ item.quantity }}
          <button @click="increaseQuantity(item)">+</button>
        </p>

        <p>Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}</p>

        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
      <h3>Total: ${{ totalPrice }}</h3>
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
