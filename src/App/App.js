import React from 'react'
import NavBar from '../components/Nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../components/Events/Dashboard/EventDashboard'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage.jsx'
import EventDetailedPage from '../components/Events/EventDetailed/EventDetailedPage/EventDetailedPage'
import PeopleDashboard from '../components/User/PeopleDashboard/PeopleDashboard'
import SettingsDashboard from '../components/User/Settings/SettingsDashboard/SettingsDashboard'
import UserDetailedPage from '../components/User/UserDetailedPage/UserDetailedPage'
import EventForm from '../components/Events/EventForm/EventForm'
const App = () => {
  return (
    <>

      <Route exact path='/' component={HomePage} />
      <NavBar />
      <Container className='main'>
        <Switch>
          <Route exact path='/events' component={EventDashboard} />
          <Route path='/events/:id' component={EventDetailedPage} />
          <Route exact path='/people' component={PeopleDashboard} />
          <Route exact path='/profile/:id' component={UserDetailedPage} />
          <Route path='/settings' component={SettingsDashboard} />
          <Route exact path='/createEvent' component={EventForm} />
        </Switch>
      </Container>
    </>
  )
}

export default App
