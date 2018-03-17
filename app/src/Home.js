import React, { Component } from 'react'

const style = {
  home: {
    height: '100vh',
    backgroundColor: 'lightgreen',
    paddingTop: '30px'
  },
  p: {
    color: 'red',
    fontSize: '30px',
    margin: '0px'
  }
}

class Home extends Component {
  render() {
    return (
      <div className="Home" style={style.home}>
        <p style={style.p}>Places</p>
      </div>
    )
  }
}

export default Home
