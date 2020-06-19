"use strict";

/* intial map position */
const lon = 13.3916;
const lat = 52.5172;
let map;

document.onload = drawMap();

/**
 * method to draw the leaflet map
 */
function drawMap() {

    // initialize Leaflet
    map = L.map('map').setView({ lon: lon, lat: lat }, 11);

    // add the OpenStreetMap tiles
    let osmde = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data © OpenStreetMap and contributors CC-BY-SA'
    }).addTo(map);
    let tonerLite = new L.StamenTileLayer("toner-lite");
    let baseLayers = { "OSM": osmde, "Greyscale": tonerLite };
    L.control.layers(baseLayers).addTo(map);

    // show the scale bar on the lower left corner
    L.control.scale().addTo(map);
}

/**
 * method to apply a marker to the map
 * @param address address object
 */
function addMarker(address) {
    let markerPos = address.markerPos;

    let marker = L.marker(markerPos).addTo(map);
    address.my_marker = marker;

    address.my_marker.on('click', function () {
        map.setView(marker.getLatLng(), 20);
        editAddress(address);
    });
}

/**
 * method to show the popup window of a marker
 * @param address address object of which you want to see the popup window
 */
function showMarker(address) {
    let marker = address.my_marker;

    /* popup
        .setLatLng(marker.getLatLng())
        .setContent("<div class=\"avatarContainer\">" + "<img src=\"img/img_avatar.jpg\" width=\"50\" height=\"50\">" + "</div>" + "<p class=\"popupLabel\">" + "Name" + "</p>" +  "<p class=\"popupValue\">" + address.forename + " " + address.name + "</p>" + "<p class=\"popupLabel\">" + "Addresse" +  "</p>" + "<p class=\"popupValue\">" + address.street + "</p>" + "<p class=\"popupValue\">" + address.postId + " " + address.town + "</p>" + "<img  src=\"img/edit_icon.png\" width=\"50\" height=\"50\" id=\"editButtonPopup\">");
    marker.bindPopup(popup).openPopup(); */


    map.setView(marker.getLatLng(), 20);

    /* let update = document.querySelector("#editButtonPopup");
    update.addEventListener("click", function (e) {
        editAddress(address);
    });

    popup = null; */
}