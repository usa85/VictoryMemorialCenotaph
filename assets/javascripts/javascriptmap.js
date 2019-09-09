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
    var iconBase="https://developers.google.com/maps/documentation/javascript/examples/full/images";
    var icons ={
      trees:{ 
        icon: iconBase +"treeImage.png"
      },
      cenotaph:{
        icon: iconBase +"cenotaphMarker.png"
      },
      cenotaphJe: {
        icon: iconBase +"cenotaphMarkerJe.png"
      },
      streetview:{
        icon: iconBase +"streetview.png"
      }

    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    for (var i = 0; i < cenotaph.length; i++) {
      var cenotaphm = cenotaph[i];
      var marker = new google.maps.Marker({
        position: {lat: cenotaphm[1], lng: cenotaphm[2]},
        map: map,
        icon: image,
        shape: shape,
        title: cenotaphm[0],
        zIndex: cenotaphm[3]
      });
    }
  }

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: 45.027728, lng: -93.312869}
    });

    setMarkers(map);
  }