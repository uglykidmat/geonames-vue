<script setup>
import { onMounted } from 'vue';
// defineProps({
//     countryName: String,
// }),
const componentName = 'Fetchtest';

function fetchTest() {
    try {
        const response = fetch(
            'https://127.0.0.1:8000/findCountryCodeByName/France',
            {
                method: "GET",
                headers: { 'Authorization': 'Basic ' + 'Z2F0b3I6Z3RyUHdkNzMh' }
            }
        ).then(response => response.json());
        //let countryCode = response.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};
onMounted(() => {
    console.log('Hi mama !');
    fetchTest();
})

</script>

<template>
    <div>
        <p>{{ componentName }}</p>
        <p>{{ response }}</p>
    </div>
</template>