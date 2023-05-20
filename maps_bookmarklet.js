javascript:(function(){
d=prompt("Enter the ZIP code:", "");
if(d!=null){
  var map_url="https://maps.google.com/?q="+escape(d).replace(/ /g,"+");
  
   c = document.createElement("script");
   c.type = "text/javascript";
   c.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
   c.onload = c.onreadystatechange = function() {};
   document.getElementsByTagName('head')[0].appendChild(c);
   c = document.createElement("script");
   c.type = "text/javascript";
   c.src = 'https://maps.googleapis.com/maps/api/js?sensor=false';
   document.getElementsByTagName('head')[0].appendChild(c);
   c.onload = c.onreadystatechange = function() {};
   
   var c = document.createElement("div");
   c.id = c.name = 'map-canvas';
   document.getElementsByTagName('body')[0].appendChild(c);
  
  function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
  }
  
  alert('init map');
  google.maps.event.addDomListener(window, 'load', initialize);
  alert('ready');
  }

}())

  $(function() { 
    google.maps.event.addDomListener(window, 'load', initialize);
    var geocoder = new google.maps.Geocoder();
    var coords = '';
  
    geocoder.geocode( { 'address': d}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
	
 			coords = results[0].geometry.location/toUrlValue() + ',1mi';
			alert(coords);
  			$.getJSON(
    			'https://api.twitter.com/1.1/search/tweets.json?geocode=' + gc + '&lan=en',
     			function (data) {
				;
     			});
		} else {
			alert('Geocode failed');
		}
     	}); 
    } );
}

}())
  
document.write("<html><body><div id='map-canvas'></div></body></html>");
document.body.innerHTML="<div id='map-canvas'></div>";

 $(function() {
 	var geocoder = new google.maps.Geocoder();
 
 	geocoder.geocode( { 'address': d}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
	
 			var gc = results[0].geometry.location/toUrlValue() + ',1mi';
			alert(gc);
  			$.getJSON(
    			'https://api.twitter.com/1.1/search/tweets.json?geocode=' + gc + '&lan=en',
     			function (data) {
				document.write(data);
     			});
		} else {
			alert('Geocode failed');
		}
     	});
});
//windevegoow.location=map_url;    
}
//void 0
//  alert(map_url);


// geocode=latitude,longitude,radius"
// Example Values: 37.781157,-122.398720,1mi
// lang=en

  javascript:(function(){document.body.innerHTML = '<div>TEST</div>';alert("test");}())

javascript:var map;  
  document.write("<script type='text/javascript'     src='https://maps.googleapis.com/maps/api/js?sensor=false'></script>");
  javascript:(function(){document.write("<html><body><div id='map-canvas'></div></body></html>");})();
  
  function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
	alert('initialize');
  }

    
    b = document.body.innerHTML;
    b = b + "<div id='map-canvas'></div>";
    document.body.innerHTML = b;
  
javascript:(function(){
  var zip = "10003";
  var map_url="https://maps.google.com/?q="+escape(zip).replace(/ /g,"+");

   
   var c = document.createElement("iframe");
   c.id = c.name = 'map-frame';
   c.src = map_url;
   document.body.appendChild(c);
}())  
