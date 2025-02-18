import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Récupère l'utilisateur connecté du localStorage
  }),
  actions: {
    login(user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Sauvegarde l'utilisateur dans le localStorage
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user'); // Retire l'utilisateur du localStorage
    },
  },
});
