import React from 'react';

class Unsplashimg extends React.Component {
  render() {
    return (
      <div className='imgDad'>
        <img className='img' src={this.props.sourceimg} alt="Khawa" />
        <hr></hr>
      </div>
    )
  }
}
export default Unsplashimg;