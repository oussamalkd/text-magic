<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Collapse from "./components/Collapse.vue"
import Modal from "./components/Modal.vue"
import Specification from "./types/index"


const header = ref<Array<Specification>>([]) 

const specifications = ref([
  {
    id: 1,
    name: "Sport",
    options: {
      engine: "V6 3.5 L",
      color: "white"
    }
  },
  {
    id: 2,
    name: "Comfort",
    options: {
      engine: "V6 3.9 L",
      color: "Black"
    }
  },
]);
const newItem = ref("")
const priority = ref(false)


</script>

<template>
  <div class="bg-gray-100 text-gray-800 w-full h-screen flex justify-center items-center">
    <div class="content w-full px-10 lg:w-4/12 mx-auto">
      <Modal />
      <Collapse v-for="spec in specifications" :key="spec.id"
        :title="spec.name"
        :options="spec.options"
      />
      <div class="w-full">
        <label for="my-modal" class="btn btn-primary w-full">+ Make new specification</label>
      </div>
    </div>
  </div>
</template>
