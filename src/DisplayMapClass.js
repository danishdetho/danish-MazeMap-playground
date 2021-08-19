// src/DisplayMapClass.js
import React from 'react';
export class DisplayMapClass extends React.Component {
	mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    myMap: null
  };

  componentDidMount() {

   
    // Create an instance of the map
	var mapOptions = {
    // The DOM element ID for the map
    container: 'mazemap-container',

    // The ID of the campus to show
    campuses: 121,

    // Initial position of map
    center: {lng: 13.270286316716465, lat: 52.502217640505705},

    // Initial zoom of map
    zoom: 18,

    // Initial floor z level of map
    zLevel: 3
	}
    var myMap = new window.Mazemap.Map(mapOptions);
	myMap.on('click', function(e){
    myMap.flyTo({center:e.lngLat, zoom: 18});
	});
	this.setState({ myMap });
  }
	
  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.myMap.dispose();
  }
  render() {
    return (
      // Set a height on the map so it will display
      <div id='mazemap-container' style={{ height: "700px" }}></div>

    );
  }
}