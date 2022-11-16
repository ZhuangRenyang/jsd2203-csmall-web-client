import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',//配置统一前缀
        name: 'home',
        component: HomeView,
        //重定向
        redirect: 'admin/admins/list',
        children: [
            {
                path: 'admins/list',
                component: () => import('../views/admins/AdminListView'),
                meta: {
                    title: '酷鲨商城-用户列表'
                }
            },
            {
                path: 'admins/add-new',
                component: () => import('../views/admins/AdminAddNewView'),
                meta: {
                    title: '酷鲨商城-添加用户'
                }
            },
            {
                path: 'category/list',
                component:() => import('../views/category/CategoryListView'),
                meta: {
                    title: '酷鲨商城-商品列表'
                }
            },
            {
                path: 'category/add-new',
                component:() => import ('../views/category/CategoryAddNewView'),
                meta:{
                    title: '酷鲨商城-添加商品类别'
                }
            },
            {
              path: 'brand/list',
                component:() => import('../views/brand/BrandListView'),
                meta: {
                  title: '酷鲨商城-品牌列表'
                }
            },
            {
                path: 'brand/add-new',
                component:() => import ('../views/brand/BrandAddNewView'),
                meta:{
                    title: '酷鲨商城-添加品牌'
                }
            }
        ]
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

router.beforeEach((to, from, next) => {

    document.title = to.meta.title ? to.meta.title : "酷鲨商城管理平台";
    next();
})