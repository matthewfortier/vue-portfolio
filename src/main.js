import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import VueDisqus from 'vue-disqus';
import { store } from './store.js';
const fb = require('./firebase.js');

Vue.config.productionTip = false;
Vue.prototype.$fb = fb;
Vue.use(VueDisqus);

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const currentUser = firebase.auth().currentUser;

    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (requiresAuth && currentUser) {
        next();
    } else {
        next();
    }
});

let app;
fb.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});
