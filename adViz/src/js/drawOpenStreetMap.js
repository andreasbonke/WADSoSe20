let map;
let popup = L.popup();

function drawmap() {
    
    // Position und Zoomstufe der Karte
    const lon = 13.3916;
    const lat = 52.5172;

    // initialize Leaflet
    map = L.map('map').setView({ lon: lon, lat: lat }, 11);

    // add the OpenStreetMap tiles
    let osmde = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', { maxZoom: 19, attribution: 'Map data © OpenStreetMap and contributors CC-BY-SA' }).addTo(map);
    let tonerLite = new L.StamenTileLayer("toner-lite");
    let toner = new L.StamenTileLayer("toner");
    let watercolor = new L.StamenTileLayer("watercolor");
    let baseLayers = { "OSM": osmde, "Greyscale": tonerLite, "Black and White": toner, "Watercolor": watercolor}; L.control.layers(baseLayers).addTo(map);

    // show the scale bar on the lower left corner
    L.control.scale().addTo(map);
   
}

function showMarker(latitute, longitude){
   
    let markerPos = [latitute, longitude];
    let marker = L.marker(markerPos).addTo(map);    

     popup
     .setLatLng(markerPos)
     .setContent("<b>HTW-Berlin<br>Wilhelminenhofstra&szlig;e 75 A<br>12459 Berlin</b><p><img src=\"img/contact_htw-berlin.jpg\" width=\"180\" height=\"113\">");
     
    marker.bindPopup(popup).openPopup();

    map.setView(markerPos,18);
}