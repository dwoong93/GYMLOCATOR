window.addEventListener('DOMContentLoaded', async function(){

    function get2hrWeather(){

        let date_time = moment().format()
        let date = moment().format('YYYY-MM-DD')

        params = {
            date_time, date
        }

        clearOptionalLayers();

        axios.get(weather2hrAPI, { params }).then(function (response) {
            let weather2hr = response.data
            weather2hrLayer = new L.layerGroup()
        })
    }




})
    

            