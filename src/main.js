import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
//import Lazyload from './directives/lazyloader'

createApp(App).use(store).mount('#app');