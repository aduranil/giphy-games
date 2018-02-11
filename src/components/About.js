import React from 'react';
import { Segment, Header } from 'semantic-ui-react'

const About = props => {
  return (
    <Segment basic>
      <Header
        as='h1'
        textAlign='center'
        content='Memory'
        color='orange'
        style={{ fontSize: '5em', fontWeight: 'bold', marginBottom: '0.5em'}}
      />
      <Header
        as='h4'
        content='Click on any two cards to flip them. If they are a match, they will stay flipped over. If they are not a match, they will flip back after three seconds. You win when you have correctly matched each pair of cards!'
      />
    </Segment>
  )
}

export default About
