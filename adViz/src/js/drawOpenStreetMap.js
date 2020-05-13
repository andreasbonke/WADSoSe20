        function drawmap() {
            // Popup und Popuptext mit evtl. Grafik
            var popuptext = "<font color=\"black\"><b>HTW-Berlin<br>Wilhelminenhofstra&szlig;e 75 A<br>12459 Berlin</b><p><img src=\"img/contact_htw-berlin.jpg\" width=\"180\" height=\"113\"></p></font>";

            // Position und Zoomstufe der Karte
            var lon = 13.3916;
            var lat = 52.5172;
            var markerPos = {lat: 52.45722 , lon: 13.52694}
            
            var element = document.getElementById("map");
 
            // initialize Leaflet
      var map = L.map('map').setView({lon: lon, lat: lat}, 11);

      // add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(map);

      // show the scale bar on the lower left corner
      L.control.scale().addTo(map);

      // show a marker on the map
      L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
        }