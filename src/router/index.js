import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const ProFile = () => import('../views/profile/ProFile')
// 1.安装插件
Vue.use(VueRouter)

//2、创建router
const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: ProFile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

//3、导出
export default router
