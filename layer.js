const addReport = () => {
	const report = new ol.layer.Vector({
		title: 'report',
		source: new ol.source.Vector({
      url: 'https://raw.githubusercontent.com/EFisher828/National-Foliage-map/main/10-25-21%20Report.kml',
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

const cities1 = () => {
	cities_1 = new ol.layer.Vector({
		title: 'Cities - 1',
		source: new ol.source.Vector({
			url: 'https://raw.githubusercontent.com/EFisher828/Foliage-National-Map/main/City%20GeoJSONs/Cities%20-%201.geojson',
	  		format: new ol.format.GeoJSON()
	  	}),
	  	style: city1Style,
	  	zIndex: 11,
	  	name: 'Cities - 1'
	})
	map.addLayer(cities_1)
}
cities1()

const cities2_northeast = () => {
	cities_2_NE = new ol.layer.Vector({
		title: 'Cities - 2 - Northeast',
		source: new ol.source.Vector({
			url: 'https://raw.githubusercontent.com/EFisher828/Foliage-National-Map/main/City%20GeoJSONs/Cities%20-%202%20-%20Northeast.geojson',
	  		format: new ol.format.GeoJSON()
	  	}),
	  	style: city2Style,
	  	zIndex: 11,
	  	name: 'Cities - 2 - Northeast'
	})
	map.addLayer(cities_2_NE)
}

const cities2_southeast = () => {
	cities_2_SE = new ol.layer.Vector({
		title: 'Cities - 2 - Southeast',
		source: new ol.source.Vector({
			url: 'https://raw.githubusercontent.com/EFisher828/Foliage-National-Map/main/City%20GeoJSONs/Cities%20-%202%20-%20Southeast.geojson',
	  		format: new ol.format.GeoJSON()
	  	}),
	  	style: city2Style,
	  	zIndex: 11,
	  	name: 'Cities - 2 - Southeast'
	})
	map.addLayer(cities_2_SE)
}

const interstates = () => {
	interstatesLayer = new ol.layer.Vector({
		title: 'Interstates',
		source: new ol.source.Vector({
			url: 'https://raw.githubusercontent.com/EFisher828/Foliage-National-Map/main/Other%20GeoJSONs/Primary%20Roads.geojson',
	  		format: new ol.format.GeoJSON()
	  	}),
	  	style: interstateStyle,
	  	zIndex: 10,
	  	name: 'Interstates'
	})
	map.addLayer(interstatesLayer)
}

//interstates()
