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
  <div class="bg-gray-100 text-gray-800 w-full h-screen flex justify-center items-center">
    <div class="content w-full px-10 lg:w-4/12 mx-auto">
      <Modal />
      <div v-if="getSpecifications.length === 0" class="alert alert-warning shadow-lg my-2">
        <span>No specification found</span>
      </div>
      <Collapse v-else v-for="spec in getSpecifications" :key="spec.id"
        :title="spec.name"
        :options="spec.options"
      />
      <div class="w-full">
        <label for="my-modal" class="btn btn-primary w-full">+ Make new specification</label>
      </div>
    </div>
  </div>
</template>
