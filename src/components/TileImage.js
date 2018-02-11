import React from 'react';
import {Image, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TileImage extends React.Component {

  changeState = (event) => {
    const props = this.props
    props.toggler(event.target.id, event.target.attributes[1].nodeValue)
    setTimeout(props.pairIds,3000)
  }

  render() {
    const props = this.props
    return (
      <div>
        {props.url.includes(props.idName) ?
          <Image
            onClick={this.changeState}
            src={props.gif.images.fixed_height.url}/>
          :
          <Label
            color='blue'
            name={props.idName}
            id={props.gif.images.fixed_height.url}
            onClick={this.changeState}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    url: state.url,
    id: state.id
  }
}

export default connect(mapStateToProps, actions)(TileImage)
