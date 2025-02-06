import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Lara from '@primevue/themes/lara';

// components
import App from './App.vue';
import Doctors from './views/Doctors.vue';
import Nurses from './views/Nurses.vue';

// directives
import Ripple from 'primevue/ripple';

// styles
import 'primeicons/primeicons.css';
import './style.css';

const pinia = createPinia();
const app = createApp(App);

app.directive('ripple', Ripple);

const routes = [
    { path: '/doctors', name: "doctors", component: Doctors },
    { path: '/nurses', name: "nurses", component: Nurses }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(ToastService);
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
});
app.mount('#app');