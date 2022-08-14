import React from 'react'

class DisplayedInfo extends React.Component {


  render() {

    return (
      <div>
        <hr></hr>
        <p>City name : {this.props.name}</p>
        <hr></hr>
      </div>
    )
  }
}

export default DisplayedInfo;