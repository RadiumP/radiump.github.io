var markers = [];
function setMarkers(center, radius, map,js) {
	var bounds = new google.maps.LatLngBounds();   
        
        //loop between each of the json elements
        for (var i = 0, length = js.length; i < length; i++) {
            var data = js[i];
             latLng = new google.maps.LatLng(data.lat, data.lng); 
             // Creating a marker and putting it on the map
                 var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: data.content,
                    icon: "http://maps.google.com/mapfiles/markerA"+ ".png"//change accordingly
                });
                  bounds.extend(marker.position);  
             google.maps.event.addListener(marker, "click", function(e) {
            
            // infoWindow.setContent(data.content);
            //ib.open(map, this);
            map.panTo(this.getPosition());

        });
             markers.push(marker);
          
        }

        for (var i = 0; i < markers.length; i++) {
            var liq = []; 
            liq[0] = document.getElementById("review");
            //liq[1] = document.getElementById("fillgauge2");
            //liq[i].style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
           

            var myOptions = {
                 content: liq[i]
                ,disableAutoPan: true
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-50, 0)
                ,zIndex: null
                ,boxStyle: { 
                  background: "url('tipbox.gif') no-repeat"
                  ,opacity: 0.75
                  ,width: "100px"
                 }
                
                ,closeBoxURL:""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,position:latLng
                ,isHidden: false
                ,pane: "mapPane"
                ,enableEventPropagation: false
            };
 
             markers[i].infobox = new InfoBox(myOptions);
            //Open box when page is loaded
             markers[i].infobox.open(map, markers[i]);
        }
          //map.setCenter(latLng);

}
function DeleteMarkers() {
        //Loop through all the markers and remove
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    };