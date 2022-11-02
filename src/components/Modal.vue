<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import store from "../store"
import { Engine, Materials, Color, WheelRims, WheelsType } from "../types"
const specificationName = ref('')
const airSuspansiion = ref(false)
const signatureOnHood = ref('')
const selectedEngine = ref('Engine')
const selectedMaterial = ref('Interior materials')
const selectedColor = ref('Color')
const selectedWheelRims = ref('Wheel rims')
const selctedWheelType = ref('Type of wheels')
//data
const isOpen = ref(false)
const engines = reactive<Array<Engine>>(
    [
        { id: 1, label: 'V6 3.5 L' },
        { id: 2, label: 'V7 4.8 L'}
    ])
const materials = reactive<Array<Materials>>(
    [
        { id: 1, label: 'Leather' },
        { id: 2, label: 'Vinyl'},
        { id: 3, label: 'Polyseter'}
    ])
const colors = reactive<Array<Color>>(
    [
        { id: 1, label: 'White' },
        { id: 2, label: 'Black'},
        { id: 3, label: 'Green'},
        { id: 4, label: 'Navy'},
    ])

const wheelsReem = reactive<Array<WheelRims>>(
    [
        { id: 1, label: '20 inches' },
        { id: 2, label: '25 inches'},
        { id: 3, label: '30 inches'},
    ])
const wheelsType = reactive<Array<WheelsType>>(
    [
        { id: 1, label: 'Alloy' },
        { id: 2, label: 'Steel'},
        { id: 3, label: 'Forged'},
    ])

const clearData = (): void => {
    specificationName.value = ""
    selectedEngine.value = "Engine"
    selectedMaterial.value = "Interior materials"
    selectedColor.value = "Color"
    selectedWheelRims.value = "Wheel Rims"
    selctedWheelType.value =  "Type of wheels"
    airSuspansiion.value = false
    signatureOnHood.value = ""
}


const onSave = () => {
    const specification = {
        id: store.state.specifications.length + 1,
        name: specificationName.value,
        options: {
            engine: selectedEngine.value,
            materials: selectedMaterial.value,
            color: selectedColor.value,
            wheelRims: selectedWheelRims.value,
            wheelsType: selctedWheelType.value,
            airSuspension: airSuspansiion.value,
            signatorOnHood: signatureOnHood.value
        }
    }
    store.state.specifications.push(specification)
    clearData()
}

</script>

<template>
    <input type="checkbox" id="my-modal" class="modal-toggle"/>
    <label for="my-modal" class="modal cursor-pointer">
    <label class="modal-box relative overflow-hidden" for="">
        <form @submit.prevent="onSave()" class="form-control w-full max-w-xl">

            <label class="label">
                <span class="label-text">Name of specification</span>
            </label>
            <input v-model="specificationName" type="text" name="specification-name" class="input input-bordered">

            <select v-model="selectedEngine" class="drop-down">
                <option disabled selected>Engine</option>
                <option v-for="eng in engines" :key="eng.id">{{eng.label}}</option>
            </select>

            <select v-model="selectedMaterial" class="drop-down">
                <option disabled selected>Interior materials</option>
                <option v-for="matrial in materials" :key="matrial.id">{{matrial.label}}</option>
            </select>

            <select v-model="selectedColor" class="drop-down">
                <option disabled selected>Color</option>
                <option v-for="color in colors" :key="color.id">{{color.label}}</option>
            </select>

            <select v-model="selectedWheelRims" class="drop-down">
                <option disabled selected>Wheel rims</option>
                <option v-for="wReem in wheelsReem" :key="wReem.id">{{wReem.label}}</option>
            </select>

            <select v-model="selctedWheelType" class="drop-down">
                <option disabled selected>Type of wheels</option>
                <option v-for="wType in wheelsType" :key="wType.id">{{wType.label}}</option>
            </select>

            <label class="label cursor-pointer w-4/12">
                <input v-model="airSuspansiion" type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Air suspansion</span>
            </label>

            <label class="label">
                <span class="label-text">Signature on hood</span>
            </label>
            <input v-model="signatureOnHood" type="text" name="signature-hood" class="input input-bordered">

            <div class="footer-content">
                <button> + new configuration option</button>
                <input type="submit" value="Save" />
                <label for="my-modal" class="btn btn-ghost max-w-md"> Close </label>
            </div>
        </form>
    </label>
    </label>
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
        label {
            @apply btn-ghost;
        }
    }
}
</style>
