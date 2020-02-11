import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import NavBar from '../components/NavBar/NavBar'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <Dashboard />
      </Container>
    </>
  )
}

export default App
