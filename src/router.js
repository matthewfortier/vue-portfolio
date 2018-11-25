import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Post from './views/Post';
import Login from './views/Login';
import Posts from './views/Posts';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { depth: 1 }
        },
        {
            path: '/post',
            name: 'Post',
            component: Post,
            meta: {
                requiresAuth: true,
                depth: 2
            }
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Posts,
            meta: { depth: 2 }
        },
        {
            path: '/blog/:slug',
            name: 'Post',
            component: Post,
            meta: { depth: 3 }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { depth: 2 }
        },
        {
            path: '/about',
            name: 'about',
            meta: { depth: 2 },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
