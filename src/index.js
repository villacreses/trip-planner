const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = "pk.eyJ1IjoibWFyaW85NzAiLCJhIjoiY2plenUwMTgxMGZlZjMzbzk5dmpqaWFvZyJ9.8XPq_WtHGylMEfLROxWRNg";

const map = new mapboxgl.Map({
  container: "map", // corresponds with id in the DOM 
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 11.5, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDiv = document.createElement('div');
// markerDiv.style.width = '32px';
// markerDiv.style.height = '39px';
// markerDiv.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDiv).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

const marker2 = buildMarker("restaurant", [-73.98401990000002, 40.751279]);
marker2.addTo(map);

const marker3 = buildMarker("hotel", [-73.97602069999999, 40.6804717]);
marker3.addTo(map);