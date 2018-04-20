import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class LocationForm extends Component {

  constructor(props) {
    super(props)

    this.handleClickAddLocation = this.handleClickAddLocation.bind(this)
  }

  handleClickAddLocation = () => {
    this.props.handleClickAddLocation("19.4917", "-99.1337")
  }

  render() {

    const handleClickAddLocation = this.handleClickAddLocation

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
          <Button
            color={'danger'}
            className="mb-5"
            onClick={handleClickAddLocation}
          >Add Location</Button>
        </div>
      </div>
    )
  }
}

export default LocationForm
