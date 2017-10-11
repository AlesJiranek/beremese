import React from 'react';


class Map extends React.PureComponent {

  componentDidMount() {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.src = 'https://api.mapy.cz/loader.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    if (s1.readyState) {  //IE
      s1.onreadystatechange = () => {
        if ( s1.readyState === "loaded" || s1.readyState === "complete" ) {
          s1.onreadystatechange = null;
          this.loadMap();
        }
      };
    } else {  //Others
      s1.onload = () => {
        this.loadMap();
      };
    }
    s0.parentNode.insertBefore(s1, s0);
  }


  createMap() {
    const center = SMap.Coords.fromWGS84(14.1906017, 49.5524336);
    const map = new SMap(JAK.gel("map"), center, 16);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    const mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_ZOOM);
    map.addControl(mouse);
    const zoom = new SMap.Control.Zoom({}, {showZoomMenu: false});
    map.addControl(zoom);
    this.createMarker(map);
  }


  createMarker(map) {
    const position = SMap.Coords.fromWGS84(14.1906017, 49.5524336);
    const layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();

    const options = {};
    const marker = new SMap.Marker(position, "Mlýn");
    layer.addMarker(marker);
  }



  loadMap() {
    Loader.async = true;
    Loader.load(null, null, this.createMap.bind(this));
  }


  render() {
    return (
      <div id="fh5co-map">
        <div id="map" />
      </div>
    );
  }
}

export default Map;
