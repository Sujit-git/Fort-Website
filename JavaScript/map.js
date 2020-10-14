function initMap(){
    var options = {
        zoom : 8,
        center : {lat : 20.5937, lng : -78.9629} 
    }
    var map = new google.maps.Map(document.getElementById('Map'), options);
}