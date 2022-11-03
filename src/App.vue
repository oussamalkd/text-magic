<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import Collapse from "./components/Collapse.vue"
import Modal from "./components/Modal.vue"
import store from './store'
import { SpecificationMutation } from './store/specification/mutations'
import Specification from "./types/index"


const getSpecifications = computed((): Array<Specification> => {
  return store.state.specifications
})

// not used yet 
const getInfo = computed((): string => {
  return store.getters.getSpecificationInfo
})
// not used yet
const setvalue = () => {
  store.commit(SpecificationMutation.SET_NAME, "Oussa")
  store.dispatch("loadData")
}
onMounted(setvalue)

</script>

<template>
  <router-view></router-view>
</template>
