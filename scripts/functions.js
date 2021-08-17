document.addEventListener("DOMContentLoaded", function(e){
    const d = document.querySelector(".d");
    
    document.querySelector("#burger-btn").addEventListener("click", function(){
        d.classList.add("d--open");
    })
})

//Town Selector and fly-To-Town region
    let houganglatlng = [1.372135151181164, 103.8859292830705]
    let punggollatlng = [1.401469018441145, 103.90283016626528]
    let serangoonlatlng = [1.3562070189597126, 103.87489812663978]
    let sengkanglatlng = [1.3886648098226932, 103.8939135551916]
    let buangkoklatlng = [1.3839157436675633, 103.87736690869015]
    let circle = null

    document.getElementById("ShowAll-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo([1.3558681517963378, 103.81259782407385], 12.75)
        if (circle != null) {
            map.removeLayer(circle)
        }
    })

    document.getElementById("Hougang-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(houganglatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(houganglatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })

    document.getElementById("Punggol-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(punggollatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(punggollatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })

    document.getElementById("Sengkang-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(sengkanglatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(sengkanglatlng, { radius: 1600, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })

    document.getElementById("Buangkok-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(buangkoklatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(buangkoklatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })

    document.getElementById("Serangoon-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(serangoonlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(serangoonlatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })

