//Coordinates for Singapore
let singapore = [1.3558681517963378, 103.81259782407385];
//Centre point on first load
let map = L.map('singapore-map').setView(singapore, 12.48 ); 

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



//geojson data for Anytime Fitness Club Locations
let markerCluster = L.markerClusterGroup();
markerCluster.addTo(map)
window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get('data/CLUB.geojson');
    let clubLayer = L.geoJson(response.data,{
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.Club + feature.properties.Address)
        }
    }).addTo(markerCluster)

})

//geojson data for nearest Bustop
// let markerCluster = L.markerClusterGroup();
// markerCluster.addTo(map)
window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get('data/BUS.geojson');
    let busLayer = L.geoJson(response.data,{
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.Bus)
        }
    }).addTo(map)

})