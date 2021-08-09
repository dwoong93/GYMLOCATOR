
//Coordinates for Singapore
let singapore = [1.3558681517963378, 103.81259782407385];
//Centre point on first load
let map = L.map('singapore-map', {
    zoomSnap: 0.25, minZoom: 12.5, maxBounds: [[1.4724179719905892, 104.00802298417915], [1.2113590252812299, 103.61150331088808]]
}).setView([1.3558681517963378, 103.81259782407385], 12.75);

//One MapSG Default
let OneMapSG = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
    minZoom: 11,
    maxZoom: 18,
    bounds: [[1.56073, 104.11475], [1.16, 103.502]],
    attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
}).addTo(map);

// Open Street Map 
let OSM = L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
            'pk.eyJ1IjoiZGFyeWx3b29uZyIsImEiOiJja3I5cDcwMWI0YjE1MnBxaG04ZjQ2MGE4In0.vQSEV1EzN_aerLwJlfmswA'
    }
)

//One MapSG Dark Mode
let darkModeMap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Night/{z}/{x}/{y}.png', {
    minZoom: 11,
    maxZoom: 18,
    bounds: [[1.56073, 104.11475], [1.16, 103.502]],
    attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
})

// Toggling for map styles or theme 
//onemap
document.getElementById("OneMapLightRadio-btn").addEventListener("click", function (e) {
    map.removeLayer(OneMapSG);
    map.addLayer(OneMapSG)})

//Default Open Street Map
document.getElementById("OSMRadio-btn").addEventListener("click", function (e) {
    map.removeLayer(OSM);
    map.addLayer(OSM)})

    //darkmode
document.getElementById("darkmodeRadio-btn").addEventListener("click", function (e) {
    map.removeLayer(darkModeMap);
    map.addLayer(darkModeMap)})

//icon for clubs
const clubIcon = L.icon({
    iconUrl: 'images/clublogo.png',
    iconSize: [40, 40],
    iconAnchor: [20, 25]
})

//////////////////////////////////Importing of data//////////////////////////////////
window.addEventListener('DOMContentLoaded', async function () {

    //////////////////////////////////Gym Clubs//////////////////////////////////////
    //Layer group for Anytime Fitness Club - All
    let allClubs = L.layerGroup();

    //Clustering for for Anytime Fitness Club Locations
    let clubCluster = L.markerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true
    });
    clubCluster.addTo(map)

    //Loading geoJson data for gym clubs
    let response = await axios.get('data/CLUB.geojson');
    let clubCoords = response.data.features;
    let clubs = L.geoJson(response.data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Club + feature.properties.Address)
        }
    }).addTo(clubCluster)

    //getting outlet names and putting them into an array
    let outletNames = [];
    for (let x = 0; x < clubCoords.length; x++) {
        outletNames.push(clubCoords[x].properties.Club)
    }
    // console.log(outletNames);

    //getting outlet coordinates and putting them into an array       
    let outletCoords = [];
    for (let i = 0; i < clubCoords.length; i++) {
        outletCoords.push([clubCoords[i].geometry.coordinates[1],clubCoords[i].geometry.coordinates[0]])
    }

    // Combining outlet names and coordinates into key-value pairs.
    let keyValPair = outletCoords.reduce(function (keyValPair, field, index) {
        outletCoords[outletNames[index]] = field;
    }, {})

    console.log(outletCoords);

    for (let y=0; y< outletCoords.length; y++){
        if (y == "Ang Mo Kio"){
            console.log (y)
        }}


    ////////////////////////BUS STOPS//////////////////////////////////////////
    //Loading geoJson data for bus stop loc and info
    let response2 = await axios.get('data/BUS.geojson');
    let busLayer = L.geoJson(response2.data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.busStopName)
        }
    })








////////////////////////WEATHER//////////////////////////////////////////
    //Loading geoJson data for weather
    // let wCoords = []
    let Wweather = L.layerGroup()
    let response3 = await axios.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date=2021-08-09');
    let weather = response3
    for (let w=0; w<weather.data.area_metadata.length; w++ ){
        // wCoords.push([response3.data.area_metadata[0].label_location.latitude,response3.data.area_metadata[0].label_location.longitude])
        let weatherPins = L.marker([weather.data.area_metadata[w].label_location.latitude, weather.data.area_metadata[w].label_location.longitude]).bindPopup(weather.data.area_metadata[w].name).addTo(Wweather);
        
        }
    // for (let b=0; b<weather.data.area_metadata.length; b++ ){
    //     // wCoords.push([response3.data.area_metadata[0].label_location.latitude,response3.data.area_metadata[0].label_location.longitude])
    //     L.marker([weather.data.area_metadata[w].label_location.latitude, weather.data.area_metadata[w].label_location.longitude]).addTo(Wweather);
        
    //     }
    
    



    // console.log (wCoords[2])
    // // console.log(wCoords.length)
    // for (let nayeon=0; nayeon<wCoords.length; nayeon++){
    //     L.marker(wCoords[nayeon]).addTo(map)
    //     console.log(wCoords[nayeon])
    // }
    

    // console.log (response3.data.area_metadata.length)
    // console.log (response3.data.area_metadata[0].label_location.latitude)
    
        



    //Toggle for Clubs
document.getElementById("ShowClub-Checkbox").addEventListener("click", function (e) {
    if(this.checked) map.addLayer(clubCluster)
    else map.removeLayer(clubCluster)
})
    //Toggle for Bus Stops
document.getElementById("ShowBusStops-Checkbox").addEventListener("click", function (e) {
    if(this.checked) map.addLayer(busLayer)
    else map.removeLayer(busLayer)
})

//Toggle for Weather
document.getElementById("ShowWeather-Checkbox").addEventListener("click", function (e) {
    if(this.checked) map.addLayer(Wweather)
    else map.removeLayer(Wweather)
})






















    //end of async function
})


