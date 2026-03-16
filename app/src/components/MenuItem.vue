<template>
  <div class="menu-item">
    <h3>{{item.name}}</h3>
    <p>Category: {{item.category}}</p>
    <p>Price: ${{item.price.toFixed(2)}}</p>
    <button @click="additem">Add to Cart</button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})

const emit = defineEmits(["add"])

function additem() {
  emit("add", props.item)
}

</script>
