import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Grid, Container } from 'semantic-ui-react'
import TileImage from '../components/TileImage'
import About from '../components/About'
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

  // maps the board to the page
  displayBoard = () => {
    const props = this.props
    if (props.board.map) {
      this.splitBoardIntoRows(props.board)
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
          <About/>
          <Grid textAlign='center' columns={4}>
            {this.displayBoard()}
          </Grid>
        </Container>
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


export default connect(mapStateToProps, actions)(Board)
