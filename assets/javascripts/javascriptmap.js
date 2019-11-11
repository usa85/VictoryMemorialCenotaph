var markers = {};

var map;

function resetMarkers(){
  for (var marker in markers){
    markers[marker].setMap(map);
  }
};


function setMarkers(map) {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.

    var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32),
    };
   
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
   

    for (var i = 0; i < cenotaph2.length; i++) {
      var cenotaphm = cenotaph2[i];
      markers[cenotaphm.primaryID] = new google.maps.Marker({
        position: {lat: cenotaphm.latitude, lng: cenotaphm.longitude},
        map: map,
      icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5,
          fillColor:'red',
          fillOpacity: 0.8,
          strokeColor: 'blue',
          strokeWeight: 0.8
        },
        shape: shape,
        title: cenotaphm.name,
        labels: cenotaphm.nearestRelative
       
      });
    }
  }

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 45.027728, lng: -93.312869},
      mapTypeId: 'satellite'
    });

    setMarkers(map);
  }