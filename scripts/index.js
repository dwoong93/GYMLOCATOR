
//Coordinates for Singapore
let singapore = [1.3558681517963378, 103.81259782407385];
//Centre point on first load
let map = L.map('singapore-map').setView(singapore, 12.18 ); 

// Tile layer
L.tileLayer(
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
).addTo(map);


//One MapSG Default
let defaultMap = L.layerGroup();

let OneMapSG_Default = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
	minZoom: 11,
	maxZoom: 18,
	bounds: [[1.56073, 104.11475], [1.16, 103.502]],
	attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
}).addTo(defaultMap)

//One MapSG Night

let darkModeMap = L.layerGroup();

let OneMapSG_Night = L.tileLayer('https://maps-{s}.onemap.sg/v3/Night/{z}/{x}/{y}.png', {
	minZoom: 11,
	maxZoom: 18,
	bounds: [[1.56073, 104.11475], [1.16, 103.502]],
	attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
}).addTo (darkModeMap)



//icon for clubs
const clubIcon = L.icon({
    iconUrl: 'images/clublogo.png',
    iconSize: [40,40],
    iconAnchor: [20, 25]
})


//Layer group for Anytime Fitness Club - All
let allClubs = L.layerGroup();

//Clustering for for Anytime Fitness Club Locations
let clubCluster = L.markerClusterGroup({
    spiderfyOnMaxZoom: false,
	showCoverageOnHover: false,
	zoomToBoundsOnClick: true
});
clubCluster.addTo(allClubs)//add cluster to layer, layer add to map

//Loading geoJson data for Anytime Fitness Club loc and info
window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get('data/CLUB.geojson');
    let clubs = L.geoJson(response.data,{
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.Club + feature.properties.Address + clubIcon)
        }
    }).addTo(clubCluster)

})


//Layer group for bus stops - All
let allBusStops = L.layerGroup();

//Clustering for ALL bus stops
let busCluster = L.markerClusterGroup({
    spiderfyOnMaxZoom: false,
	showCoverageOnHover: false,
	zoomToBoundsOnClick: true
});
busCluster.addTo(allBusStops)//add cluster to layer, layer add to map

//Loading geoJson data for bus stop loc and info
window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get('data/BUS.geojson');
    let busLayer = L.geoJson(response.data,{
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.BusStopName)
        }
    }).addTo(busCluster)

})

//Layer control
let baseLayer ={
    'OneMapSG': defaultMap,
    'Dark Mode': darkModeMap
} 
let overlays = {
    // 'Dark Mode': darkModeMap
    'clubMarkers': allClubs,
    'busStopMarkers': allBusStops
    
}

L.control.layers(baseLayer, overlays).addTo(map)
allBusStops.addTo(map);
allClubs.addTo(map);



//Testing
//Loading geoJson data for Anytime Fitness Club loc and info
// window.addEventListener('DOMContentLoaded', async function(){
//     let response = await axios.get('data/CLUB.geojson');
//     let x = L.geoJson(response.data,{
//         onEachFeature: function(feature,layer){
//             layer.bindPopup(feature.properties.Club + feature.properties.Address + clubIcon)
//         }
//     }).addTo(map)

// })