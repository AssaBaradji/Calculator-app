import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Add from '../components/Add.vue';
import Subtract from '../components/Subtract.vue';
import Multiply from '../components/Multiply.vue';
import Divide from '../components/Divide.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: Add },
  { path: '/subtract', component: Subtract },
  { path: '/multiply', component: Multiply },
  { path: '/divide', component: Divide }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
