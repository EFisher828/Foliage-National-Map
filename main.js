var attribution = new ol.control.Attribution({
    collapsible: false
});

var map = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([-95.7129,38.0902]),
        zoom: 5
    })
});

let currZoom = map.getView().getZoom();
map.on('moveend', function(e) {
  let newZoom = map.getView().getZoom();
  /*if (newZoom >= 6){
    cities2_northeast()
    cities2_southeast()
  }
  if (newZoom < 6){
    map.removeLayer(cities_2_NE);
    map.removeLayer(cities_2_SE);
  }*/
  if (currZoom != newZoom) {
    console.log('zoom end, new zoom: ' + newZoom);
    currZoom = newZoom;
  }
});

//locationsInfo = locationsSource.getFeatures

//Info pop-up
const interpret = ['Little to No Color','Low Color','Moderate Color','High Color','Peak Color','Past Peak','Low Color','Moderate Color','Peak Color','High Color']
const overlayContainerElement = document.querySelector('.overlay-container');
const overlayLayer = new ol.Overlay({
  element: overlayContainerElement
})
map.addOverlay(overlayLayer)
const overlayFeatureName = document.getElementById('feature-name')

map.on('click', function(e){
  layerList = []
  map.forEachFeatureAtPixel(e.pixel, function(feature,layer){
    layerList.push(feature.values_.id)
    topLayer = parseInt(layerList[0])
    console.log(layerList)
    overlayLayer.setPosition(undefined)
    let clickedCoordinate = e.coordinate;
    let clickedFeatureName = `<em>${interpret[topLayer]}</em>`;
    overlayLayer.setPosition(clickedCoordinate)
    overlayFeatureName.innerHTML = clickedFeatureName;

  },
  {
    layerFilter: function(layerCandidate){
      return layerCandidate.get('title') === 'report'
    }
  })
})

//Background Color
map.on('postcompose',function(e){
    document.querySelector('canvas').style.backgroundColor="#63A5D2";//linear-gradient(to bottom right, #0276BF , #7CD7F8)
});

//Export
var exportPNGElement = document.getElementById('export-png');

if ('download' in exportPNGElement) {
  exportPNGElement.addEventListener('click', function(e) {
    map.once('postcompose', function(event) {
      var canvas = event.context.canvas;
      var ctx = canvas.getContext('2d');
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#63A5D2";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      exportPNGElement.href = canvas.toDataURL('image/jpeg',1.0);
    });
    map.renderSync();
  }, false);
} else {
  var info = document.getElementById('no-download');
  /**
   * display error message
   */
  info.style.display = '';
}
