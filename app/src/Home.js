import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

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
  }
}

class Home extends Component {
  render() {
    return (
      <div className="Home" style={style.home}>
        <Container>
          <Row>
            <Col xs={12} className="d-flex flex-column align-items-center">
              <p className="text-center" style={style.p}>Places</p>
              <Button color={'danger'}>Add Location</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
