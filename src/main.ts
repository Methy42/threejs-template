import { createApp } from 'vue';

import { router } from './router';
import App from './App.vue';

const rootElement = document.createElement('div');

createApp(App).use(router).mount(rootElement);

document.body.appendChild(rootElement);