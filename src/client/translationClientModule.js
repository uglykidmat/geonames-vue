export const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
// const apiURL = import.meta.env.VITE_GEONAMES_URL;

export async function translationClient(countryCode) {
    console.log('Hey !');
    console.log(countryCode);
    try {
        console.log('Hey in trycatch !')
        let response = await fetch(
            // apiURL + '/translation',
            'https://127.0.0.1:8000/translation/search/countrycode/',
            + countryCode,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        responseContent = await response.json();
        console.log(responseContent);
        console.log('After !');
        return responseContent

    } catch (error) {
        return error;
    }
};

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