<script setup lang="ts">
import { ref } from "vue"
import { Specification } from "../store/specification/types"
const props = defineProps<{
    spec: Specification
    }>()
</script>
<template>
    
    <div class="collapse collapse-arrow bg-base-100 text-base-content rounded-box my-2">
        <input type="checkbox" class="peer" /> 
        <div class="collapse-title text-xl font-semibold peer-checked:bg-base-content peer-checked:text-secondary-content">
            {{spec.name}}
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-base-content peer-checked:text-secondary-content"> 
            <ul class="menu">
                <li>
                    Engine - {{spec.engine}}
                </li>
                <li>
                    Interior Material {{spec.materials}}
                </li>
                <li>
                    Color - {{spec.color}}
                </li>
                <li>
                    Wheel rims - {{spec.wheelRims}}
                </li>
                <li>
                    Type of wheels - {{spec.wheelsType}}
                </li>
                <li>
                    Air suspension - {{spec.airSuspension ? "Yes" : "No"}}
                </li>
                <li>
                    Signature on hood - {{spec.signatorOnHood}}
                </li>
                <li v-if="spec.newOption?.length !==0"
                    v-for="opt in spec.newOption"
                >
                    {{opt.label}} - {{ opt.value}}
                </li>
            </ul>
            <RouterLink :to="`edit/${spec.id}`" class="link link-accent"> Edit </RouterLink>
        </div>
    </div>
</template>
