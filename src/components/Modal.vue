<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { Color } from "../types"
const specificationName = ref('')
const airSuspansiion = ref(false)
const signatureOnHood = ref('')
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

const test = () => {
    engines.forEach(eng => {
        console.log(eng.id);
        
    })
}
onMounted(test)

</script>

<template>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <label for="my-modal" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
        <form action="" class="form-control w-full max-w-xl">
            <label class="label">
                <span class="label-text">Name of specification</span>
            </label>
            <input v-model="specificationName" type="text" name="specification-name" class="input input-bordered">

            <select class="drop-down">
                <option disabled selected>Engine</option>
                <option v-for="eng in engines" :key="eng.id">{{eng.label}}</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Interior materials</option>
                <option v-for="matrial in materials" :key="matrial.id">{{matrial.label}}</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Color</option>
                <option v-for="color in colors" :key="color.id">{{color.label}}</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Wheel rims</option>
                <option v-for="wReem in wheelsReem" :key="wReem.id">{{wReem.label}}</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Type of wheels</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <label class="label cursor-pointer w-4/12">
                <input v-model="airSuspansiion" type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Air suspansion</span>
            </label>

            <label class="label">
                <span class="label-text">Signature on hood</span>
            </label>
            <input v-model="signatureOnHood" type="text" name="specification-name" class="input input-bordered">

            <div class="footer-content">
                <button> + new configuration option</button>
                <button> Save</button>
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
        button {
            @apply btn btn-primary max-w-md;
        }
    }
}
</style>
