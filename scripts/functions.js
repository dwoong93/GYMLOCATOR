//Event listener for instuctions overlay
document.addEventListener("DOMContentLoaded", function(e){
    const overlay = document.querySelector(".overlay");
    
    document.querySelector("#btn-overlay").addEventListener("click", function(){
        overlay.classList.add("overlay--open");
    })
})


//Event listener for menu toggle
document.addEventListener("DOMContentLoaded", function(e){
    const d = document.querySelector(".d");
    
    document.querySelector("#burger-btn").addEventListener("click", function(){
        d.classList.toggle("d--open");
    })
})



//Town Selector and fly-To-Town region
    let angmokiolatlng = [1.3725801310240844, 103.84382114927492]
    let bedoklatlng = [1.3256025141748007, 103.93290945498346]
    let bishanlatlng = [1.3511726936741244, 103.84406859393023]
    let bukitbatoklatlng=[1.3581360453725848, 103.75910623139886]
    let bukitmerahlatlng = [1.2810573789454733, 103.82085295913308]
    let bukitpanjanglatlng = [1.3782221464358502, 103.76012342901723]
    let bukittimahlatlng=[1.3322107279114177, 103.78707423638998]
    let centrallatlng = [1.3061962171836972, 103.84388491313537]
    let ccklatlng = [1.386773924232134, 103.74610737474593]
    let clementilatlng = [1.3181704325323813, 103.76557372900892]
    let geylanglatlng = [1.3210843099197676, 103.8862916269706]
    let houganglatlng = [1.372135151181164, 103.8859292830705]
    let jurongeastlatlng = [1.3364048563256956, 103.74088905653741]
    let jurongwestlatlng = [1.3420002737428485, 103.70575260969872]
    let kallanglatlng = [1.312994017818792, 103.85906428041834]
    let marinelatlng = [1.3038470375076487, 103.89518180682168]
    let pasirlatlng = [1.3597078968391874, 103.96725339421498]
    let queenstownlatlng = [1.2996427546523133, 103.78966240237737]
    let semblatlng = [1.4487219308187465, 103.81872883405595]
    let tamplatlng = [1.3524416861605397, 103.95321492607094]
    let toalatlng = [1.3352824351385066, 103.8541408547141]
    let woodlatlng = [1.4379089357368429, 103.79525864936457]
    let yishunlatlng = [1.4261049311236949, 103.83229256262324]










    
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
    document.getElementById("Angmokio-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(angmokiolatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(angmokiolatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Bedok-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(bedoklatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(bedoklatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Bishan-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(bishanlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(bishanlatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Bukitbatok-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(bukitbatoklatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(bukitbatoklatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Bukitmerah-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(bukitmerahlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(bukitmerahlatlng, { radius: 1600, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Bukitpanjang-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(bukitpanjanglatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(bukitpanjanglatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Bukittimah-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(bukittimahlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(bukittimahlatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Central-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(centrallatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(centrallatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("CCK-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(ccklatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(ccklatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Clementi-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(clementilatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(clementilatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Geylang-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(geylanglatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(geylanglatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
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
    document.getElementById("JurongEast-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(jurongeastlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(jurongeastlatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("JurongWest-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(jurongwestlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(jurongwestlatlng, { radius: 1900, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Kallang-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(kallanglatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(kallanglatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Marine-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(marinelatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(marinelatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Pasir-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(pasirlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(pasirlatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
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
    document.getElementById("Queens-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(queenstownlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(queenstownlatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Semb-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(semblatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(semblatlng, { radius: 1500, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
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
    document.getElementById("Serangoon-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(serangoonlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(serangoonlatlng, { radius: 1700, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Tamp-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(tamplatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(tamplatlng, { radius: 1900, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Toa-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(toalatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(toalatlng, { radius: 1900, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Wood-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(woodlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(woodlatlng, { radius: 1900, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
        map.addLayer(circle)
    })
    document.getElementById("Yishun-btn").addEventListener("click", function (e) {
        // e.preventDefault()
        map.flyTo(yishunlatlng, 15)
        if (circle != null) {
            map.removeLayer(circle)
        }
        circle = L.circle(yishunlatlng, { radius: 1600, fillColor: "#FFB300", color: "null", fillOpacity: 0.3 })
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

    

