import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventDetailedHeader from '../EventDetailedHeader/EventDetailedHeader'
import EventDetailedInfo from '../EventDetailedInfo/EventDetailedInfo'
import EventDetailedChat from '../EventDetailedChat/EventDetailedChat'
import EventDetailedSidebar from '../EventDetailedSidebar/EventDetailedSidebar'
import { connect } from 'react-redux'

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </GridColumn>
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event = {}
  if (eventId && state.events.length > 0) {
    event = state.events.filter(evt => evt.id === eventId)[0]
  }
  return {
    event
  }
}
export default connect(mapStateToProps)(EventDetailedPage)
