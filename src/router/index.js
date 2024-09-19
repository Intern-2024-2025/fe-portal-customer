//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/blog',
        name: 'blog',
        component: () => import( /* webpackChunkName: "home" */ '../components/Blog.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../components/Hero.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import( /* webpackChunkName: "home" */ '../components/Contact.vue')
    },
    // {
    //     path: '/product',
    //     name: 'product',
    //     component: () => import( /* webpackChunkName: "home" */ '../components/product.vue')
    // },
    // {
    //     path: '/posts',
    //     name: 'posts.index',
    //     component: () => import( /* webpackChunkName: "index" */ '../views/posts/index.vue')
    // },
    // {
    //     path: '/create',
    //     name: 'posts.create',
    //     component: () => import( /* webpackChunkName: "create" */ '../views/posts/create.vue')
    // },
    // {
    //     path: '/edit/:id',
    //     name: 'posts.edit',
    //     component: () => import( /* webpackChunkName: "edit" */ '../views/posts/edit.vue')
    // }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router