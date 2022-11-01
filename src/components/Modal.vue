<script setup lang="ts">
</script>

<template>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <label for="my-modal" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
        <form action="" class="form-control w-full max-w-xl">
            <label class="label">
                <spnan class="label-text">Name of specification</spnan>
            </label>
            <input type="text" name="specification-name" class="input input-bordered">

            <select class="drop-down">
                <option disabled selected>Engine</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Interior materials</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Color</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Wheel rims</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <select class="drop-down">
                <option disabled selected>Type of wheels</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>

            <label class="label cursor-pointer w-4/12">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Air suspansion</span> 
            </label>

            <label class="label">
                <spnan class="label-text">Signature on hood</spnan>
            </label>
            <input type="text" name="specification-name" class="input input-bordered">

            <div class="footer-content">
                <button> + new configuration option</button>
                <button> + Save</button>
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
            outline: none;
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
