import React from 'react';
import {Image, Label} from 'semantic-ui-react'

class TileImage extends React.Component {
  state = {
    visible: false
  }

  changeState = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <div>
      {this.state.visible?
        <Image onClick={this.changeState} src={this.props.gif.images.fixed_height.url}/> :
        <Label onClick={this.changeState}/>}
      </div>
    )
  }
}

export default TileImage
