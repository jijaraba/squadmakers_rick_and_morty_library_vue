import {createApp} from 'vue'
import App from './App.vue'
import RickCard from "./components/RickCard.vue";


createApp(App)
    .use(RickCard)
    .mount('#app')
