import React from 'react';

class Unsplashimg extends React.Component {
  render() {
    return (
      <div className='imgDad'>
        <img className='img' src={this.props.source} alt="Unsplash image"/>
        <hr></hr>
      </div>
    )
  }
}
export default Unsplashimg ;