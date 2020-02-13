import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventDetailedHeader from '../EventDetailedHeader/EventDetailedHeader'
import EventDetailedInfo from '../EventDetailedInfo/EventDetailedInfo'
import EventDetailedChat from '../EventDetailedChat/EventDetailedChat'
import EventDetailedSidebar from '../EventDetailedSidebar/EventDetailedSidebar'

const EventDetailedPage = (props) => {
  console.log('props in EventDetailed Page', props)
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <EventDetailedSidebar />
      </GridColumn>
    </Grid>
  )
}

export default EventDetailedPage
