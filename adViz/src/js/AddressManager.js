"use strict";

/**
 * method to get coordinates of a certain address
 * when get request successful a marker is added to the map and the address is added to the DB
 * @param address address object
 */
function get_coordinates(address) {
    let params = new URLSearchParams(address.street + " " + address.postId + " " + address.town);
    let url = "https://api.tomtom.com/search/2/geocode/" + params + ".json?countrySet=DE&key=SL0aR93PQoAaWTez8PLTAGhARjEgeDhf";

    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    if (data["results"].length === 0) {
                        alert("Adresse konnte nicht gefunden werden! Vorgang abgebrochen");
                        return;
                    }
                    let latitude = data["results"][0]["position"]["lat"];
                    let longitude = data["results"][0]["position"]["lon"];
                    address.markerPos = [latitude, longitude];
                    addAddressToDB(address);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}
