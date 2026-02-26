import { reactive } from 'vue'

export const store = reactive({
  cart: [],

  addToCart(item) {
    const existingItem = this.cart.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      this.cart.push({ ...item, quantity: 1 })
    }
  },
})
