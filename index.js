'use strict';

var angular = require('angular');
var L = require('leaflet');
var EsriLeaflet = require('esri-leaflet');
var Proj4Leaflet = require('proj4leaflet');
require('leaflet.markercluster');
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';

L.esri = EsriLeaflet;
L.Proj = Proj4Leaflet;


var map_test2 = angular.module('map_test2',[]);


map_test2.controller('MapCtrl', function($scope) {

  var resolutions = [
    21674.7100160867,
    10837.35500804335,
    5418.677504021675,
    2709.3387520108377,
    1354.6693760054188,
    677.3346880027094,
    338.6673440013547,
    169.33367200067735,
    84.66683600033868,
    42.33341800016934
];

  // The polar projection
  var crs = new L.Proj.CRS( 'EPSG:32661',
  '+proj=stere +lat_0=90 +lat_ts=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',{
    resolutions: resolutions,
    transformation: new L.Transformation(1, 28567900, -1, 32567900)
  });

  var map = L.map('map', {
      center: [78.00, 20.00],
      zoom: 6,
      crs: crs,
      continuousWorld: true,
      worldCopyJump: false
  });

 L.esri.tiledMapLayer({
        attribution: `<a href="http://npolar.no">Norsk Polarinstitutt</a>`,
        continuousWorld: true,
        url: "http://geodata.npolar.no/arcgis/rest/services/Basisdata_Intern/NP_Arktis_WMTS_32661/MapServer"
}).addTo(map);

});
