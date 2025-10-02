import { createApp } from 'vue';
import './assets/styles.css';
import App from './App.vue';
import ui from '@nuxt/ui/vue-plugin';

const app = createApp(App);

app.use(ui).mount('#app');
