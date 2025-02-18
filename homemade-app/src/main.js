import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // On importe le routeur
import { createPinia } from 'pinia';
import './style.css';

const app = createApp(App);

app.use(createPinia()); // Ajout de Pinia pour la gestion d'état
app.use(router); // Ajout de Vue Router

app.mount('#app');
