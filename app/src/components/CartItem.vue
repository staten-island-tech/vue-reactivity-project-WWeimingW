<template>
  <div class="cart-item">
    <h4>{{item.name}}</h4>
    <p>${{item.price.toFixed(2)}} x {{ item.quantity }}</p>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="remove">Remove</button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})

const emit = defineEmits(["increase","decrease","remove"])
function increase() {
  emit("increase", props.item)
}
function decrease() {
  emit("decrease", props.item)
}
function remove() {
  emit("remove", props.item.id)
}

</script>