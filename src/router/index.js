import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('../views/home/home')
const category = () =>
    import ('../views/category/category')
const shopcart = () =>
    import ('../views/shopcart/shopcart')
const person = () =>
    import ('../views/person/person')
const detail = () =>
    import ('../views/detail/detail')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/shopcart',
        component: shopcart
    }, {
        path: '/person',
        component: person
    }, {
        path: '/detail/:iid',
        component: detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router