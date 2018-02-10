import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Grid, Container, Label, Message} from 'semantic-ui-react'

class Board extends React.Component {

  // loads the initial gifs
  componentDidMount = () => {
    this.props.setBoard()
  }

  displayBoard = () => {
    if (this.props.board.map) {
      return this.props.board.map(gif => {
        return ( <Grid.Row columns={4}>
          <img src={gif.images.fixed_height_small.url} />
        </Grid.Row> )
      })
    }
  }
  render(){
    console.log(this.props.board)
    return (
      <div>
        <Container>
          <Grid>
            {this.displayBoard()}
          </Grid>
        </Container>
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
