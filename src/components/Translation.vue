<script setup>
import { ref } from 'vue';

const initialState = defineProps({
    GeonameId: Number,
    CountryCode: String,
    OriginalName: String,
    Fcode: String,
    Locale: String,
    Index: Number,
    Active: Boolean
})

const isEditActive = ref(false);
const translationDone = ref(false);
const newTranslation = ref('');

const emit = defineEmits(
    ['updatename', 'isEditactive', 'translationDone']
)

function editTranslation(name) {
    translationDone.value = false;
    isEditActive.value = true;
    newTranslation.value = name;
    return null;
}
function cancelTranslation() {
    isEditActive.value = false;
    return null;
}

function switchoff() {
    isEditActive.value = false;
    translationDone.value = true;
    return null;
}

</script>
<template>
    <ul class="responserow">
        <li>{{ GeonameId }}</li>
        <!-- <li>{{ Fcode }}</li> -->
        <li>{{ CountryCode }}</li>
        <li>{{ Locale }}</li>

        <li v-if="!isEditActive && !translationDone">{{ OriginalName }}</li>
        <li v-if="translationDone">{{ newTranslation }}</li>
        <input v-if="isEditActive" v-model="newTranslation"
            @keydown.enter="$emit('updatename', newTranslation, Index); switchoff()" type="text" class="editblock" />

        <div class="formbuttons">
            <button v-if="!isEditActive" :id="`Button` + Index" class="editbutton"
                @click="$emit('translationDone'); editTranslation(OriginalName)">Edit</button>
            <button v-if="isEditActive" class="editbutton"
                @click="$emit('updatename', newTranslation, Index); switchoff()">Save</button>
            <button v-if="isEditActive" class="editbutton" @click="cancelTranslation(OriginalName)">Cancel</button>
        </div>
    </ul>
</template>

<style scoped lang="scss">
.responserow {
    /* margin: 0; */
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    column-gap: 1em;
    text-align: left;
    align-items: center;

    input {
        line-height: 1.5;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        background-color: inherit;
        border: none;
        border-bottom: 1px solid var(--dark);
    }
}

.formbuttons {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    gap: 1em;
}
</style>