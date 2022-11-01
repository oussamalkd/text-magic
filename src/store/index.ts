import App from '../App.vue'
import Vuex, { StoreOptions } from "vuex"

App.use(Vuex)
const store: StoreOptions<any> = {
    state: {},
    modules: {}
}

export default new Vuex.Store()