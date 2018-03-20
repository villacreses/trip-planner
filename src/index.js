const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibWFyaW85NzAiLCJhIjoiY2plenUwMTgxMGZlZjMzbzk5dmpqaWFvZyJ9.8XPq_WtHGylMEfLROxWRNg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDiv = document.createElement('div');
markerDiv.style.width = '32px';
markerDiv.style.height = '39px';
markerDiv.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDiv).setLngLat([-74.099, 40.705]).addTo(map);
