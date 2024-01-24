<script setup>
import { onMounted, onUpdated, ref } from 'vue';

const initialState = defineProps({
    GeonameId: Number,
    CountryCode: String,
    OriginalName: String,
    Fcode: String,
    Locale: String,
    Index: Number
})

const isEditActive = ref(false);
const newTranslation = ref('');
const refTranslation = ref('');

const emit = defineEmits(
    ['updatename', 'isEditactive']
)

// onUpdated(() => {
//     console.log("Une update maman ?");
// })

onMounted(() => {
    refTranslation.value = initialState.OriginalName
    //console.log("refTranslation :", refTranslation.value)
});


function editTranslation(name) {
    isEditActive.value = true;
    newTranslation.value = name;
    // console.log('Cached translation : ', newTranslation.value);
    //return name = 
}
function cancelTranslation() {
    console.log("Cancelled translation for :", refTranslation.value);
    isEditActive.value = false;
    return null;
}

function saveNewTranslation(name, Index) {
    console.log("Le nouveau name :", name);
    console.log("Bon Maman c'est la dernière fonction...peut-être !");

    isEditActive.value = false;
    // return newTranslation;
}

</script>
<template>
    {{ newTranslation }}
    <ul class="responserow">
        <li>{{ GeonameId }}</li>
        <!-- <li>{{ Fcode }}</li> -->
        <li>{{ CountryCode }}</li>
        <li>{{ Locale }}</li>
        <li v-if="!isEditActive">{{ OriginalName }}</li>
        <input v-if="isEditActive" v-model="newTranslation" type="text" class="editblock" />

        <div class="formbuttons">
            <button v-if="!isEditActive" :id="`Button` + Index" class="editbutton"
                @click="editTranslation(OriginalName)">Edit</button>
            <!-- <button v-if="isEditActive" class="editbutton" @click="saveNewTranslation(newTranslation)">Save</button> -->
            <button v-if="isEditActive" class="editbutton" @click="$emit('updatename', newTranslation, Index)">Save</button>
            <!-- <button v-if="isEditActive" class="editbutton" @click="saveNewTranslation(newTranslation, Index)">Save</button> -->
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