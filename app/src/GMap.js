import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class GMap extends Component {
  render() {
    return (
      <div className="GMap">
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat: 19.5113713, lng: -99.1262256 }}
        >
          <Marker position={{ lat: 19.5113713, lng: -99.1262256 }} />
        </GoogleMap>
      </div>
    )
  }
}

export default withScriptjs(withGoogleMap(GMap))
