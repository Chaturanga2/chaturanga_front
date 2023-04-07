import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { i18n } from './plugins';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Toaster from '@meforma/vue-toaster';

library.add(fas);
const app = createApp({
    extends: App,
    beforeCreate() {
        store.commit('initializeStore');
    }
});

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $toast: Toaster;
        $store: typeof store;
    }
}
app.component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(Toaster, { position: 'top' })
    .use(i18n)
    .mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
