import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(dish) {
      this.items.push(dish);
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
  },
});
