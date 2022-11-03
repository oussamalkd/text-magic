<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { NewOption } from "../store/specification/types"

const option: NewOption = reactive({})

const emit = defineEmits(['save'])

const onSave = (): void => {
   emit('save',option)
}


const clearInput = (): void => {
    option.label = ""
}

onMounted(clearInput)

</script>

<template>
    <input type="checkbox" id="my-modal" class="modal-toggle"/>
    <label for="my-modal" class="modal cursor-pointer">
    <label class="modal-box relative overflow-hidden" for="">
        <form @submit.prevent="onSave()" class="form-control w-full max-w-xl">
            <label class="label">
                <span class="label-text">New option label</span>
            </label>
            <input v-model="option.label" type="text" name="option-name" class="input input-bordered">
            <div class="modal-footer w-full flex justify-between my-2">
                <input type="submit" value="Add" class="btn btn-primary">
                <label for="my-modal" class="btn btn-ghost" @click="clearInput">Close</label>
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
