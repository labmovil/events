import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import LocationForm from '../Components/LocationForm.js'
import GMap from '../Components/GMap.js'

const style = {
    home: {
        height: '100vh',
        backgroundColor: 'lightgreen',
        paddingTop: '30px'
    },
    p: {
        color: 'red',
        fontSize: '30px',
        marginTop: '0px'
    },
    button: {

    },
    map: {

    }
}

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: {
                lat: 0,
                lng: 0
            }
        }
    }



    handleClickAddLocation = (lat, lng) => {
        const location = {
            lat: lat,
            lng: lng
        }
        this.setState({
            location: location
        })
    }


    render() {
            return ( <
                    div className = "Home"
                    style = { style.home } >
                    <
                    Container fluid >
                    <
                    Row >
                    <
                    Col xs = { 12 }
                    className = "p-0 d-flex flex-column align-items-center" >
                    <
                    p className = "text-center"
                    style = { style.p } > Places < /p> <
                    LocationForm / >
                    <
                    GMap googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement = { < div style = {
                            { width: `100%`, height: `100%` }
                        }
                        />}
                        containerElement = { < div style = {
                                { width: `100%`, height: `400px` }
                            }
                            />}
                            mapElement = { < div style = {
                                    { width: `100%`, height: `100%` }
                                }
                                />} / >
                                <
                                /Col> < /
                                Row > <
                                /Container> < /
                                div >
                            )
                        }
                    }

                    export default Home