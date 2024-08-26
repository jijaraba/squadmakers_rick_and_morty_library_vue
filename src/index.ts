import { App } from 'vue'
import RickCard from './components/RickCard.vue'

export default {
    install: (app: App<Element>) => {
        app.component('RickCard', RickCard)
    }
}
