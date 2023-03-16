import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './themes/Gryffondor.scss';
import './themes/Serdaigle.scss';
import './themes/Poufsouffle.scss';
import './themes/Serpentard.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Toaster from '@meforma/vue-toaster';

const app = createApp({
  extends: App,
  beforeCreate() {
    store.commit('initializeStore');
  },
});

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: Toaster;
    $store: typeof store;
  }
}

app.use(store).use(router).use(Toaster, { position: 'top' }).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
