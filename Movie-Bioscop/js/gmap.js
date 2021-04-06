  function initMap() {
  var uluru = {lat: 44.84947499999999, lng: 20.39410989999999};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var labels='B';
 var contentString = '<div id="content" class="map-info">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Bioscope</h3>'+
      '<div id="bodyContent">'+
      '<p><b>Bioscope</b>, je popularni bioskop sa dugogodišnjom tradicijom. ' +
      'Uskoro će se navršiti 5 godina uspešnog poslovanja. '+
      'Imamo 3 sale sa bogatim sadržajem i novim naslovima.'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
     });
  //     var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  var marker = new google.maps.Marker({
    position: uluru,
     label: labels,
    map: map,
    title: 'Bioscope'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });  
}

 $('#location').on('shown.bs.modal', function(){
    // google.maps.event.trigger(initMap()); radi i ova varijanta a mora se dodati jer gmap ne funkcionise dobro kada je parent display:"none"
    initMap();
    });