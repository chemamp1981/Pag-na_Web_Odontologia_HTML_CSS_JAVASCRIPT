/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_INICIO CONTACTO_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

/****COLOCAR MAPA CON RUTA****/

/****GEOLOCALIZACION****/

if(navigator.geolocation){

    /****UBICACION ACTUAL POR GETCURRENTPOSITION****/

    navigator.geolocation.getCurrentPosition(sucess,error,options);

}else{
        alert("los servicios del geolocalización no están disponibles");
    }
var options = {
    enableHighAccuracy: true,
    timeout : 5000,
    maximumAge: 0
};

function sucess(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

 
  let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 14
    });

    

 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
     maxZoom: 18
    }).addTo(map);
    
    
    
/****CREAMOS ICONO INICIO****/
    
let inicio = L.icon({
        iconUrl: '../assets/img/iconoinicio.png',
    
           iconSize:       [24,30],
           iconAnchor:     [12,30],
           tooltipAnchor:  [0,-30]
});

/****CREAMOS ICONO FINAL****/

 let final = L.icon({
     iconUrl: '../assets/img/luna_favicon.png',

        iconSize:       [30,30],
        iconAnchor:     [12,25],
        tooltipAnchor:  [0,30]
});

/****CREAMOS ICONO INTERMEDIO****/

let interMedio = L.icon({
    iconUrl: '../assets/img/iconoruta.png',

       iconSize:       [23,30],
       iconAnchor:     [12,25],
       tooltipAnchor:  [0,-30]
});

/****RUTA A TRAZAR****/

var control = L.Routing.control({
    waypoints: [
        L.latLng(latitude, longitude),
        L.latLng(36.84225, -2.45346)
    ],
    language: 'es',
        createMarker: function(i, wp, nWps) {
            switch(i) {
                case 0:
                    return L.marker(wp.latLng, {
                    icon: inicio,
                    draggable: true
                }).bindTooltip("<b>Inicio<b>");
                case nWps -1:
                    return L.marker(wp.latLng, {
                    icon: final,
                    draggable: true
                }).bindTooltip("<b>Odontologia Luna<b>");
                default:
                    return L.marker(wp.latLng, {
                    icon: interMedio,
                    draggable: true
                }).bindTooltip("<b>Intermedio<b>");
            }

        }
    }).addTo(map);
}

function error() {
    let map = L.map('map', {
        center: [36.84225, -2.45346],
        zoom: 17
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   let popup = L.popup()
            .setLatLng([36.84225, -2.45346])
            .setContent('<b>Odontologia Luna<b>');

        // CREAMOS ICONO

        let iconoUnico = L.icon({
            iconUrl: '../assets/img/luna_favicon.png',
            
            iconSize:     [30, 30], // size of the icon
            iconAnchor:   [12, 25], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
        });
        
        // PONEMOS MARCA EN EL MAPA

        var marker = L.marker([36.84225, -2.45346], {icon: iconoUnico}).bindPopup(popup).openPopup().addTo(map);
}

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_FIN CONTACTO_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

