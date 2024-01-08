# Geonames Vue

"Reverse/Geocoding Webservices": this repository contains the Geonames front-end part, built on a VueJS 3.3 + Vite 5.0 base.

Very early alpha version, made by a stagios who does know know anything about Vue.js and frontend in general.

## Deployment

```bash
  git clone https://github.com/Gatoreviews/geonames-vue.git
  yarn run dev
```
will run on 
```bash
  http://localhost:5173/
```

## What does it do ?
For now there is a simple "fetch" function in the only "Fetchtest" component.

It will try to reach for the Symfony Geonames API (see https://github.com/Gatoreviews/geonames) and log the JSON response of the call.

(`[{"country_code":"FR"}]` is returned since the `fetch()` method tries to reach for `/findCountryCodeByName/France`);