// This is where it all goes :)
$(document).ready(function(){

$("#loader").css("display", "none");

function main (){
  var map = L.map('mapa',{zoomControl:false}).setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.08345, -76.19751]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

L.marker([5.08345, -76.19751]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

}

document.addEventListener('DOMContentLoaded', main );


a=new Vivus('afiche', {duration: 370}, function(){
  // new Vivus('fondo', {duration: 370}, function(){});
});
// b=new Vivus('afiche', {duration: 370}, function(){});

});
