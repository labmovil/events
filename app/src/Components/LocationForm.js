import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class LocationForm extends Component {
  render() {
    return (
      <div className="LocationForm">
        <Form>
        <FormGroup>
          <Label for="exampleLatitude">Latitude</Label>
          <Input type="email" name="Latitude" id="exampleLatitude" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLongitude">Longitude</Label>
          <Input type="Longitude" name="password" id="exampleLongitude" placeholder="password placeholder" />
        </FormGroup>
      </Form>
      </div>
    )
  }
}

export default LocationForm
