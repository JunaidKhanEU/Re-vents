import React, { Component } from 'react'
import EventListItem from '../EventListItem/EVentListItem'

export class EventList extends Component {
  render () {
    return (
      <>
        {
          this.props.events.map(event => (
            <EventListItem key={event.id} event={event} />
          ))
        }

      </>
    )
  }
}

export default EventList
