import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/map',
      name: 'map',
      // 组件的懒加载：当浏览器访问到这个路由时候
      component: () => import('./views/MyMap.vue'),
    },
  ],
});
