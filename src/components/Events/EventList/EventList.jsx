import React, { Component } from 'react'
import EventListItem from '../EventListItem/EVentListItem'

export class EventList extends Component {
  render () {
    const { events, onSelectEvent, onHandleDeleteEvent } = this.props
    return (
      <>
        {
          events.map(event => (
            <EventListItem key={event.id} event={event} selectEvent={onSelectEvent} deleteEvent={onHandleDeleteEvent} />
          ))
        }

      </>
    )
  }
}

export default EventList
