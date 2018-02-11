import React from 'react';
import {Image, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TileImage extends React.Component {

  changeState = (event) => {
    this.props.toggler(event.target.id, event.target.attributes[1].nodeValue)
    setTimeout(this.props.pairIds,3000)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.pairs.url.includes(this.props.idName)   ?
          <Image
            onClick={this.changeState}
            src={this.props.gif.images.fixed_height.url}/>
          :
          <Label
            name={this.props.idName}
            id={this.props.gif.images.fixed_height.url}
            onClick={this.changeState}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board.board,
    pairs: state.pairs
  }
}

export default connect(mapStateToProps, actions)(TileImage)
