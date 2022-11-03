<template>
    <div class="bg-gray-100 text-gray-800 w-full h-screen flex justify-center items-center">
      <div class="content w-full px-10 lg:w-4/12 mx-auto">
        <div v-if="getSpecifications.length === 0" class="alert alert-warning shadow-lg my-2">
          <span>No specification found</span>
        </div>
        <Collapse v-else v-for="spec in getSpecifications" :key="spec.id"
          :spec="spec"
        />
        <div class="w-full">
          <router-link to="/add" class="btn btn-primary w-full">+ Make new specification</router-link>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Collapse from "../components/Collapse.vue"
import store from '../store'
import { Specification } from "../store/specification/types"


const getSpecifications = computed((): Array<Specification> => {
  return store.state.specifications
})
</script>
