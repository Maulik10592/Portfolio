import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MarkersC = ( {text} ) => <div className="mapText">{text}</div>;

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 22.349713068213973,
        lng: 73.19018269414397
      },
      zoom: 18
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="googleMap" style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <MarkersC
            lat={22.349713068213973}
            lng={73.19018269414397}
            text="DeveloperMV"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

