import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Grid, Container, Label, Message} from 'semantic-ui-react'

class Board extends React.Component {

  componentDidMount = () => {
    this.props.setBoard()
  }

  render(){
    console.log(this.props)
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}


export default connect(mapStateToProps, actions)(Board)
