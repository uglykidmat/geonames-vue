const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
// const apiURL = import.meta.env.VITE_GEONAMES_URL;

export async function translationClient() {
    try {

        let response = await fetch(
            // apiURL + '/translation',
            'https://127.0.0.1:8000/translation',
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        return responseContent = await response.json();

    } catch (error) {
        return error;
    }
};

// export async function logMe() {
//     console.log("me !");
// }

export async function searchTranslationByCountryCode(countrycode) {
    console.log("heyo maman !");
    let responseContent = '';
    try {
        const response = await fetch(
            // apiURL + '/translation',
            'https://127.0.0.1:8000/translation/search/countrycode/' + countrycode,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        return responseContent = await response.json();

    } catch (error) {
        let errorHappened = true;
        return responseContent = 'Error! Could not reach the API : ' + error;
    }
}

export default translationClient;