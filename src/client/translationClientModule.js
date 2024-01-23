export const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
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
        responseContent = await response.json();
        return responseContent

    } catch (error) {
        return error;
    }
};

export async function logMe() {
    console.log("Hello mama from external module !");
    return 'Hello mama form return external module'
}

export async function externalSearchTranslationByCountryCode(countrycode) {
    console.log("heyo maman from external search Module !");
    let responseContent = '';
    try {
        console.log("Hello mama from inside the TryCatch");
        const response = await fetch(
            // apiURL + '/translation',
            'https://127.0.0.1:8000/translation/search/countrycode/' + countrycode,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        return await response.json();

    } catch (error) {
        console.log("Hello mama from inside the Error");
        let errorHappened = true;
        return responseContent = 'Error! Could not reach the API : ' + error;
    }
}