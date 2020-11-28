import { createApp } from 'vue';
import App from './App.vue';
import router from './lib/router';

import './assets/tailwind.css';

createApp(App)
    .use(router)
    .mount('#app');
