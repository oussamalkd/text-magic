<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({title:String, options: Object})
</script>
<template>
    <div class="collapse collapse-arrow bg-base-100 text-base-content rounded-box my-2">
        <input type="checkbox" class="peer" /> 
        <div class="collapse-title text-xl font-semibold peer-checked:bg-base-content peer-checked:text-secondary-content">
            {{props.title}}
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-base-content peer-checked:text-secondary-content"> 
            <ul class="menu">
                <li>
                    Engine - {{options?.engine}}
                </li>
                <li>
                    Interior Material {{options?.materials}}
                </li>
                <li>
                    Color - {{options?.color}}
                </li>
                <li>
                    Wheel rims - {{options?.wheelRims}}
                </li>
                <li>
                    Type of wheels - {{options?.wheelsType}}
                </li>
                <li>
                    Air suspension - {{options?.airSuspension ? "Yes" : "No"}}
                </li>
                <li>
                    Signature on hood - {{options?.signatorOnHood}}
                </li>
            </ul>
        </div>
    </div>
</template>
