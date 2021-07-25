
//Coordinates for Singapore
let singapore = [1.3558681517963378, 103.81259782407385];
//Centre point on first load
let map = L.map('singapore-map', {maxBounds: [[1.4181493527121631, 103.97115101277154], [1.2456159021582167, 103.61471399164832]]

}).setView([1.3558681517963378, 103.81259782407385], 12 ); 

// let southWest = L.latLng(1.56073, 104.11475);
// let northEast = L.latLng(1.16, 103.502);
// let mapBounds = L.latLngBounds(corner1, corner2);

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

//Importing of data
window.addEventListener('DOMContentLoaded', async function(){


//Layer group for Anytime Fitness Club - All
    let allClubs = L.layerGroup();

//Clustering for for Anytime Fitness Club Locations
    let clubCluster = L.markerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true
    });
    clubCluster.addTo(allClubs)

//Loading geoJson data for gym clubs
        let response = await axios.get('data/CLUB.geojson');
        let clubCoords = response.data.features;
        
        for (let x=0; x<clubCoords.length; x++){
            console.log (clubCoords[x].properties.Club)}

        for (let i=0; i<clubCoords.length; i++){
            console.log (clubCoords[i].geometry.coordinates)

        }

        let clubs = L.geoJson(response.data,{
            onEachFeature: function(feature,layer){
                layer.bindPopup(feature.properties.Club + feature.properties.Address)
            }
        }).addTo(clubCluster)


//Layer group for bus stops - All
    let allBusStops = L.layerGroup()
    //Loading geoJson data for bus stop loc and info
        let response2 = await axios.get('data/BUS.geojson');
        let busLayer = L.geoJson(response2.data,{
            onEachFeature: function(feature,layer){
                layer.bindPopup(feature.properties.busStopName)
            }
        }).addTo(allBusStops)

    
//Layer control
    let baseLayer ={
        'OneMapSG': defaultMap,
        'Dark Mode': darkModeMap
    } 
    let overlays = {
        // 'Dark Mode': darkModeMap
        'Show All Clubs': allClubs,
        'Show Bus Stops': allBusStops
        
    }

    L.control.layers(baseLayer, overlays).addTo(map)
    allBusStops.addTo(map);
    allClubs.addTo(map);

//end of async function
})

