import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Grid, Container} from 'semantic-ui-react'
import TileImage from '../components/TileImage'

let newArr = []
class Board extends React.Component {

  // loads the initial gifs
  componentDidMount = () => {
    this.props.setBoard()
  }

  // making the array 2-d to easily map it on the board in even columns
  splitBoardIntoRows = (array) => {
    while (array.length) {
      newArr.push(array.splice(0,4))
    }
    return newArr
  }

  displayBoard = () => {
    if (this.props.board.map) {
      this.splitBoardIntoRows(this.props.board)
      return newArr.map((array,idx)=> {
        return (
          <Grid.Row key={idx} columns={4}>
            {array.map((gif,index) => {
              return (
                <Grid.Column key={index}>
                  <TileImage idName={""+idx+index} gif={gif}/>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        )
      })
    }
  }
  render(){
    return (
      <div>
        <Container>
          <Grid celled columns={4}>
            {this.displayBoard()}
          </Grid>
        </Container>
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


export default connect(mapStateToProps, actions)(Board)
