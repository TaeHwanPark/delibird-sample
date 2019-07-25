import Vue from 'vue'
import Router from 'vue-router'
import OrderPage from "./page/OrderPage";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: OrderPage
    }
  ]
})
