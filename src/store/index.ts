import Vue from 'vue'
import Vuex, { StoreOptions } from "vuex"
import { RootState } from "./types"
import { specification } from './specification/index'

const store: StoreOptions<RootState> = {
    state: {
        specifications: []
    },
    modules: {
        specification
    }
}

export default new Vuex.Store<RootState>(store)
