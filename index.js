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
    42.33341800016934,
    21.16670900008467,
    10.583354500042335,
    5.291677250021167,
    2.6458386250105836,
    1.3229193125052918,
    0.6614596562526459,
    0.33072982812632296,
    0.16536491406316148
];

  // The polar projection
  var crs = new L.Proj.CRS( 'EPSG:3031',
  ''+'+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',{
    resolutions: resolutions,
    transformation: new L.Transformation(1, 30636100, -1, 30636099.999999993)
  });

  var map = L.map('map', {
      center: [-72.01667, 2.5333],
      zoom: 6,
      crs: crs,
      continuousWorld: true,
      worldCopyJump: false
  });

 L.esri.tiledMapLayer({
        attribution: `<a href="http://npolar.no">Norsk Polarinstitutt</a>`,
        continuousWorld: true,
        url: "http://geodata.npolar.no/arcgis/rest/services/Basisdata_Intern/NP_Antarktis_WMTS_3031/MapServer"
}).addTo(map);

});
