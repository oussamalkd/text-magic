<script setup lang="ts">
import { computed } from 'vue';
import router from '../router';
import store from '../store';
import { Specification, NewOption } from "../store/specification/types"
import Modal from "../components/Modal.vue";


// get current specification
const currentId = router.currentRoute.value.params.id
const getSpecification = computed(() => {
    return store.state.specifications.find(spec => spec.id === +currentId) as Specification
})

// on edit event
const onSave = (): void => {
    const index = store.state.specifications.map(spec => spec.id ).indexOf(getSpecification.value.id)
    store.state.specifications[index] = getSpecification.value
    router.push({name: "home"})
    
}

// add new option
const newOption: NewOption = {}
const getNewOption = (option: NewOption): void => {
    newOption.label = option.label
    newOption.value = ""
    getSpecification.value.newOption?.push(newOption)
}

</script>

<template>
    <div class="edit-view w-full h-screen flex justify-center items-center">
        <Modal @save="getNewOption" />
        <form v-if="getSpecification !== undefined" @submit.prevent="onSave()" class="form-control w-full max-w-xl">

            <label class="label">
                <span class="label-text">Name of specification</span>
            </label>
            <input v-model="getSpecification.name" type="text" name="specification-name" class="input input-bordered input-primary">

            <select v-model="getSpecification.engine" class="drop-down">
                <option disabled selected>Engine</option>
                <option v-for="eng in store.state.engines" :key="eng.id">{{eng.label}}</option>
            </select>

            <select v-model="getSpecification.materials" class="drop-down">
                <option disabled selected>Interior materials</option>
                <option v-for="matrial in store.state.materials" :key="matrial.id">{{matrial.label}}</option>
            </select>

            <select v-model="getSpecification.color" class="drop-down">
                <option disabled selected>Color</option>
                <option v-for="color in store.state.colors" :key="color.id">{{color.label}}</option>
            </select>

            <select v-model="getSpecification.wheelRims" class="drop-down">
                <option disabled selected>Wheel rims</option>
                <option v-for="wReem in store.state.wheelRims" :key="wReem.id">{{wReem.label}}</option>
            </select>

            <select v-model="getSpecification.wheelsType" class="drop-down">
                <option disabled selected>Type of wheels</option>
                <option v-for="wType in store.state.wheelsTypes" :key="wType.id">{{wType.label}}</option>
            </select>

            <label class="label cursor-pointer w-3/12">
                <input v-model="getSpecification.airSuspension" type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Air suspansion</span>
            </label>

            <label class="label">
                <span class="label-text">Signature on hood</span>
            </label>
            <input v-model="getSpecification.signatorOnHood" type="text" name="signature-hood" class="input input-bordered input-primary">

            <div v-if="getSpecification.newOption?.length !==0"
                v-for="newOption in getSpecification?.newOption"
                class="w-full new-options form-control"
            >
                <label class="label">
                    {{newOption.label}}
                </label>
                <input v-model="newOption.value" type="text" :name="newOption.label" class="input input-bordered input-primary" />
            </div>


            <div class="footer-content">
                <label for="my-modal"> + new configuration option</label>
                <input type="submit" value="Save" />
            </div>
        </form>
    </div>
</template>