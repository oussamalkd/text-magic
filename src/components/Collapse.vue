<script setup lang="ts">
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
                <li v-for="(key, value, index) in props.options" :key="index">
                    <a href="#">{{value}} : {{key}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
