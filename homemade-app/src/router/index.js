import { createWebHashHistory, createRouter } from 'vue-router';
import HomePage from "../pages/Home.vue";
import ChefsList from "../pages/ChefsList.vue";
import ChefDetails from "../pages/ChefDetails.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import CartPage from "../pages/CartPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/chefs', component: ChefsList },
    { path: '/chef/:id', component: ChefDetails },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/cart', component: CartPage },
];

const router = createRouter({
    history: createWebHashHistory(), // Utilisation de Web Hash History
    routes,
});

export default router;
