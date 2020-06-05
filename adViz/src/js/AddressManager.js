"use strict";

/**
 * method to get coordinates of a certain address
 * @param address as string
 * @returns {*[]} array [lat, lon]; array is empty if address was not found
 */
function get_coordinates(address) {
    let params = new URLSearchParams(address);
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.tomtom.com/search/2/geocode/" + params + ".json?countrySet=DE&key=SL0aR93PQoAaWTez8PLTAGhARjEgeDhf", false);
    xmlHttp.send(null);

    let obj = JSON.parse(xmlHttp.responseText);
    if (obj["results"].length == 0) {
        return [];
    }
    let latitude = obj["results"][0]["position"]["lat"]
    let longitude = obj["results"][0]["position"]["lon"]

    return [latitude, longitude]
}