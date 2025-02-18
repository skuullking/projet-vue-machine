import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [], // Récupère le panier depuis le localStorage
  }),
  actions: {
    addToCart(dish) {
      this.items.push(dish);
      localStorage.setItem('cartItems', JSON.stringify(this.items)); // Sauvegarde dans le localStorage
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.items)); // Sauvegarde après suppression
    },
    clearCart() {
      this.items = [];
      localStorage.setItem('cartItems', JSON.stringify(this.items)); // Réinitialise le panier
    },
  },
});
