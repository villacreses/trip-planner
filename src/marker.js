const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoibWFyaW85NzAiLCJhIjoiY2plenUwMTgxMGZlZjMzbzk5dmpqaWFvZyJ9.8XPq_WtHGylMEfLROxWRNg";

const markerType = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

function buildMarker(type, coords) {
    const markerDiv = document.createElement('div');
    markerDiv.style.width = '32px';
    markerDiv.style.height = '39px';
    markerDiv.style.backgroundImage = 'url(' + markerType[type] + ')';
    console.log(markerDiv.style.backgroundImage);
    return new mapboxgl.Marker(markerDiv).setLngLat(coords);
}

module.exports = buildMarker;