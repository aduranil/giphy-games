import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Grid, Image, Container, Label, Message} from 'semantic-ui-react'

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
      return newArr.map((array,index)=> {
        return (
          <Grid.Row columns={4}>
            {array.map(gif => {
              return (
                <Grid.Column>
                  <Image src={gif.images.fixed_height.url} />
                </Grid.Column>
              )
            })}
          </Grid.Row>
        )
      })
    }
  }
  render(){
    console.log(this.props.board)
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
    board: state.board
  }
}


export default connect(mapStateToProps, actions)(Board)
