import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import RestaurantDetails from '../pages/ResturantDetails.vue';


Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/details/:restaurant',
        name: 'details',
        component: RestaurantDetails
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;