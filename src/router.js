import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListaDeCupulas from './views/ListaDeCupulas.vue';
import Semiarido from './views/Semiarido.vue';
import Manual from './views/Manual.vue';
import Cupula from './views/Cupula.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cupulas',
      name: 'cupulas',
      component: ListaDeCupulas,
    },
    {
      path: '/cupulas/:id',
      name: 'cupula',
      component: Cupula,
    },
    {
      path: '/semiarido',
      name: 'semiarido',
      component: Semiarido,
    },
    {
      path: '/manual',
      name: 'manual',
      component: Manual,
    },
  ],
});
