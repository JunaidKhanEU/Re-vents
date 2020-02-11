import React, { Component } from 'react'
import EventListItem from '../EventListItem/EVentListItem'

export class EventList extends Component {
  render () {
    const { events, onSelectEvent } = this.props
    return (
      <>
        {
          events.map(event => (
            <EventListItem key={event.id} event={event} selectEvent={onSelectEvent} />
          ))
        }

      </>
    )
  }
}

export default EventList
