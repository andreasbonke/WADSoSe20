        var map;
        var layer_mapnik;
        var layer_tah;
        var layer_markers;

        function drawmap() {
            // Popup und Popuptext mit evtl. Grafik
            var popuptext = "<font color=\"black\"><b>HTW-Berlin<br>Wilhelminenhofstra&szlig;e 75 A<br>12459 Berlin</b><p><img src=\"img/contact_htw-berlin.jpg\" width=\"180\" height=\"113\"></p></font>";

            OpenLayers.Lang.setCode('de');

            // Position und Zoomstufe der Karte
            var lon = 13.3916;
            var lat = 52.5172;
            var zoom = 11;
            
            map = new OpenLayers.Map('map', {
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayProjection: new OpenLayers.Projection("EPSG:4326"),
                controls: [
                    new OpenLayers.Control.Navigation(),
                    new OpenLayers.Control.LayerSwitcher(),
                    new OpenLayers.Control.PanZoomBar()],
                maxExtent:
                    new OpenLayers.Bounds(-20037508.34, -20037508.34,
                        20037508.34, 20037508.34),
                numZoomLevels: 18,
                maxResolution: 156543,
                units: 'meters'
            });

            layer_mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
            layer_markers = new OpenLayers.Layer.Markers("Address", {
                projection: new OpenLayers.Projection("EPSG:4326"),
                visibility: true, displayInLayerSwitcher: false
            });

            map.addLayers([layer_mapnik, layer_markers]);
            jumpTo(lon, lat, zoom);

            // Position des Markers
            addMarker(layer_markers, 13.52694, 52.45722, popuptext);

        }