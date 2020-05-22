import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('views/Home')
const Classify=()=>import('views/Classify')
const Shopcart=()=>import('views/Shopcart')
const Mine=()=>import('views/Mine')

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/classify',
        component:Classify
    },
    {
        path:'/shopcart',
        component:Shopcart
    },{
        path:'/mine',
        compnent:Mine
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router