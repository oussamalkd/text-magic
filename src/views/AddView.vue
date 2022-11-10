<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import router from "../router";
import store from "../store"
import Modal from "../components/Modal.vue";
import { Specification, NewOption } from "../store/specification/types"

// default
const specification: Specification = reactive({
    id:store.state.specifications.length + 1,
    name: '',
    engine: 'Engine',
    materials: 'Interior materials',
    color: 'Color',
    wheelRims: 'Wheel rims',
    wheelsType: 'Type of wheels',
    airSuspension: false,
    signatorOnHood: '',
    newOption: []
})
const newOption: NewOption = {}

// clear all fields
const clearData = (): void => {
    specification.name = ''
    specification.engine = "Engine"
    specification.materials ="Interior materials"
    specification.color = "Color"
    specification.wheelRims = "Wheel rims"
    specification.wheelsType = "Type of wheels"
    specification.airSuspension = false
    specification.signatorOnHood = ""
    specification.newOption = []
}

// on save event
const onSave = () => {
    store.state.specifications.push(specification)
    router.push({name: "home"})
}

// get new option if was added and set a value for it
const getNewOption = (option: NewOption) => {
    newOption.label = option.label
    newOption.value = ""
    specification.newOption?.push(newOption)
}

// set the fields as default values
onMounted(clearData)

</script>

<template>
    <div class="add w-full h-screen flex justify-center items-center">
        <Modal @save="getNewOption" />
        <form @submit.prevent="onSave()" class="form-control w-full max-w-xl">

            <label class="label">
                <span class="label-text">Name of specification</span>
            </label>
            <input v-model="specification.name" type="text" name="specification-name" class="input input-bordered input-primary">

            <select v-model="specification.engine" class="drop-down">
                <option disabled selected>Engine</option>
                <option v-for="eng in store.state.engines" :key="eng.id">{{eng.label}}</option>
            </select>

            <select v-model="specification.materials" class="drop-down">
                <option disabled selected>Interior materials</option>
                <option v-for="matrial in store.state.materials" :key="matrial.id">{{matrial.label}}</option>
            </select>

            <select v-model="specification.color" class="drop-down">
                <option disabled selected>Color</option>
                <option v-for="color in store.state.colors" :key="color.id">{{color.label}}</option>
            </select>

            <select v-model="specification.wheelRims" class="drop-down">
                <option disabled selected>Wheel rims</option>
                <option v-for="wReem in store.state.wheelRims" :key="wReem.id">{{wReem.label}}</option>
            </select>

            <select v-model="specification.wheelsType" class="drop-down">
                <option disabled selected>Type of wheels</option>
                <option v-for="wType in store.state.wheelsTypes" :key="wType.id">{{wType.label}}</option>
            </select>

            <label class="label cursor-pointer w-3/12">
                <input v-model="specification.airSuspension" type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Air suspansion</span>
            </label>

            <label class="label">
                <span class="label-text">Signature on hood</span>
            </label>
            <input v-model="specification.signatorOnHood" type="text" name="signature-hood" class="input input-bordered input-primary">

            <div v-if="specification.newOption?.length !==0"
                v-for="newOption in specification.newOption"
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
<style lang="scss">
.form-control {
    .drop-down {
        @apply select select-primary w-full my-2;

        &::focus, &::active {
            outline: none !important;
            border: 0 !important;
        }
    }
    .footer-content {
        @apply w-full flex justify-between items-center my-5;
        * {
            @apply btn btn-primary max-w-md;
        }
    }
}
</style>
