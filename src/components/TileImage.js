import React from 'react';
import { Image, Label} from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TileImage extends React.Component {

  // when the user clicks one of the cards, its unique id and url get passed up to state. after a few seconds, the cards flip back over if the prior 2 cards flipped were not a match
  changeState = (event) => {
    const props = this.props
    props.toggler(event.target.id, event.target.attributes[1].nodeValue)
    setTimeout(props.pairIds,3000)
  }

  // if state includes one of the images the user has clicked, render the image. otherwise render the blue card
  render() {
    const props = this.props
    return (
      <div>
        { props.url.includes(props.idName) ?
          <Image
            centered
            onClick={this.changeState}
            src={props.gif.images.fixed_height.url}
          />
          :
          <Label
            color='blue'
            name={props.idName}
            id={props.gif.images.fixed_height.url}
            onClick={this.changeState}
          />
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
