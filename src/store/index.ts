import Vue from 'vue'
import Vuex, { StoreOptions } from "vuex"
import { RootState } from "./types"
import { specification } from './specification/index'

const store: StoreOptions<RootState> = {
    state: {
        specifications: [],
        engines: [
            { id: 1, label: 'V6 3.5 L' },
            { id: 2, label: 'V7 4.8 L'}
        ],
        materials: [
            { id: 1, label: 'Leather' },
            { id: 2, label: 'Vinyl'},
            { id: 3, label: 'Polyseter'}
        ],
        colors: [
            { id: 1, label: 'White' },
            { id: 2, label: 'Black'},
            { id: 3, label: 'Green'},
            { id: 4, label: 'Navy'},
        ],
        wheelRims: [
            { id: 1, label: '20 inches' },
            { id: 2, label: '25 inches'},
            { id: 3, label: '30 inches'},
        ],
        wheelsTypes: [
            { id: 1, label: 'Alloy' },
            { id: 2, label: 'Steel'},
            { id: 3, label: 'Forged'},
        ]
    },
    modules: {
        specification
    }
}

export default new Vuex.Store<RootState>(store)
