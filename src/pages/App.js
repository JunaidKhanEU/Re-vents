import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../components/Events/Dashboard/EventDashboard'

const App = () => {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  )
}

export default App
