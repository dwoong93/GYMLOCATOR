
//Coordinates for Singapore
let singapore = [1.3558681517963378, 103.81259782407385];
//Centre point on first load
let map = L.map('singapore-map',{maxBounds:[[1.4724179719905892, 104.00802298417915],[1.2113590252812299, 103.61150331088808]] 
}, {zoomSnap: 0.25}
).setView([1.3558681517963378, 103.81259782407385],13); 

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


//////////////////////////////////Importing of data//////////////////////////////////
window.addEventListener('DOMContentLoaded', async function(){

//////////////////////////////////Gym Clubs//////////////////////////////////////////
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
        let clubs = L.geoJson(response.data,{
            onEachFeature: function(feature,layer){
                layer.bindPopup(feature.properties.Club + feature.properties.Address)
            }
        }).addTo(clubCluster)

//getting outlet names and putting them into an array
        let outletNames = [];
        for (let x=0; x<clubCoords.length; x++){
            outletNames.push (clubCoords[x].properties.Club)}
        console.log (outletNames);   

//getting outlet coordinates and putting them into an array       
        let outletCoords = [];
        for (let i=0; i<clubCoords.length; i++){
            outletCoords.push (clubCoords[i].geometry.coordinates)}
        console.log (outletCoords);

// Combining outlet names and coordinates into key-value pairs.
//when "sengkang" is clicked, a for loop will run to search for coordinates of the sites in buangkok, sengkang and punggol area through the Name Key.
//These coordinates will then be stored into an array that is automated using a function, to highlight a polygon area. 
        let keyValPair = outletCoords.reduce(function(keyValPair,field,index){
            outletCoords[outletNames[index]] = field;
            return keyValPair;
        }, {})
        // console.log(keyValPair);

        
        

////////////////////////BUS STOPS//////////////////////////////////////////

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
    

    let houganglatlng = [1.3600134710418836, 103.88583821543895]
    let punggollatlng = [1.4070407602268686, 103.90543741220363]
    let circle = null

    document.getElementById("Hougang-btn").addEventListener("click", function(e){
        // e.preventDefault()
        map.setView(houganglatlng,18)
        if (circle !=null){
            map.removeLayer(circle)
        }
        circle = L.circle(houganglatlng, {radius: 200})
        map.addLayer(circle)
        

    })

    document.getElementById("Punggol-btn").addEventListener("click", function(e){
        // e.preventDefault()
        map.setView(punggollatlng,18)
        if (circle !=null){
            map.removeLayer(circle)
        }
        circle = L.circle(punggollatlng, {radius: 200})
        map.addLayer(circle)
        

    })
    

//end of async function
})

