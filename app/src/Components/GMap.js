import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class GMap extends Component {
    render() {
        const { locations } = this.props
        console.log(locations);
        return ( <
            div className = "GMap" >
            <
            GoogleMap defaultZoom = { 13 }
            defaultCenter = {
                { lat: 19.5113713, lng: -99.1262256 }
            } > {
                locations.map((location, index) =>
                    <
                    Marker key = { index }
                    position = {
                        { lat: location.lat, lng: location.lng }
                    }
                    />
                )
            } <
            /GoogleMap> < /
            div >
        )
    }
}

export default withScriptjs(withGoogleMap(GMap))