import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Chat from '@/pages/chat';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/chat',
      component: Chat
    }
  ]
});
