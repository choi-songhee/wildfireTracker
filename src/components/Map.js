import React from 'react';
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyB7a5-X_hbPTY9-mQZJcG1nKfVA8igJnw4'
        }}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8765
  },
  zoom: 6
}

export default Map;
