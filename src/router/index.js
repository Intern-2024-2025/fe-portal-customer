//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home/Home.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/* webpackChunkName: "home" */ "../views/Dashboard/Dashboard.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import(/* webpackChunkName: "home" */ "../views/blog/Blog.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import( "../views/Contact/ContactView.vue"),
  },
  // {
  //   path: "/Contact1",
  //   name: "contact1",
  //   component: () => import( "../views/Contact/MainPageView.vue"),
  // },
  {
    path: "/Pricing",
    name: "pricing",
    component: () => import( "../views/PricingV/PricingView.vue"),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes,
});

export default router;
