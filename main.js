var attribution = new ol.control.Attribution({
    collapsible: false
});

var map = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([-95.7129,37.0902]),
        zoom: 5
    })
});

//locationsInfo = locationsSource.getFeatures
const addReport = () => {
	const report = new ol.layer.Vector({
		title: 'report',
		source: new ol.source.Vector({
      url: 'https://raw.githubusercontent.com/EFisher828/National-Foliage-map/main/10-11-21%20Report.kml',
      format: new ol.format.KML()
    }),
      //style: SFLStyle,
	  	zIndex: 1,
	  	name: 'report'
  })
  map.addLayer(report)
}
addReport()

const addStates = () => {
	const states = new ol.layer.Vector({
		title: 'states',
		source: new ol.source.Vector({
      url: 'https://raw.githubusercontent.com/EFisher828/National-Foliage-map/main/CONUS%20States.kml',
      format: new ol.format.KML()
    }),
      //style: SFLStyle,
	  	zIndex: 2,
	  	name: 'states'
  })
  map.addLayer(states)
}
addStates()

const interpret = ['Little to No Color','Low Color','Moderate Color','High Color','Peak Color','Past Peak','Low Color','Moderate Color']
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
