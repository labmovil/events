import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LocationForm extends Component {
  render() {
    return (
      <div className="LocationForm">
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Latitude</Label>
          <Input type="text" name="latitude" id="examplelatitude" placeholder="Ex 99.99" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Longitude</Label>
          <Input type="text" name="longitude" id="examplelongitude" placeholder="Ex -99.99" />
        </FormGroup>
        
      </Form>
      </div>
    )
  }
}

export default LocationForm