//Coordinates for Singapore
let singapore = [1.3558681517963378, 103.81259782407385];
//Centre point on first load
let map = L.map('map').setView(singapore, 12.48 ); 

// Original map layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFyeWx3b29uZyIsImEiOiJja3I5cDcwMWI0YjE1MnBxaG04ZjQ2MGE4In0.vQSEV1EzN_aerLwJlfmswA'
}).addTo(map);

//Cluster grouping for bus stops


//Reading in bus stop location geojson file.
window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get("data/busstops.geojson");
    // let busStopsCluster = L.MarkerClusterGroup();
    let busStopsLayer = L.geoJson(response.data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("hello")}})
    busStopsLayer.addTo(map);
    busStopsCluster.addTo(map)


})








// //add a button
// document.querySelector('darkmodebtn').addEventListener('click', function(){

// })