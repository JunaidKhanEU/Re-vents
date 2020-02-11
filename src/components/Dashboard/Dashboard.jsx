import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import EventList from '../Events/EventList/EventList'
import EventForm from '../Events/EventForm/EventForm'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList />
          </GridColumn>
          <GridColumn width={6}>
            <Button positive content='Create Event' />
            <EventForm />
          </GridColumn>
        </Grid>
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard
