import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class LocationForm extends Component {
  render() {
    return (
      <div className="LocationForm">
        <div>
          <FormGroup>
            <Label for="exampleLatitude">Latitude</Label>
            <Input type="text" name="latitude" id="exampleLatitude" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleLongitude">Longitude</Label>
            <Input type="text" name="longitude" id="exampleLongitude" placeholder="password placeholder" />
          </FormGroup>
          <Button color={'danger'} className="mb-5">Add Location</Button>
        </div>
      </div>
    )
  }
}

export default LocationForm
