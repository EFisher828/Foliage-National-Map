let city1Style = (feature, resolution) => {
	style = new ol.style.Style({
		text: new ol.style.Text({
			text: feature.get('Name'),
			font: '22px Arial, sans-serif',
      weight: 'bold',
			fill: new ol.style.Fill({
				color: 'white'
			}),
			stroke: new ol.style.Stroke({
				color: 'black',
				width: 3
			}),
			overflow: true,
		})
	})
	return style
}

let city2Style = (feature, resolution) => {
	style = new ol.style.Style({
		text: new ol.style.Text({
			text: feature.get('Name'),
			font: '16px Arial, sans-serif',
			fill: new ol.style.Fill({
				color: 'white'
			}),
			stroke: new ol.style.Stroke({
				color: 'black',
				width: 2
			}),
			overflow: true,
		})
	})
	return style
}

let interstateStyle = () => {
	style = new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: '#4f4f4f',
		})
	})
	return style
}
