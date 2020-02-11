import React, { Component } from 'react'
import EVentListItem from '../EventListItem/EVentListItem'

export class EventList extends Component {
  render () {
    return (
      <>
        <EVentListItem />
        <EVentListItem />
        <EVentListItem />
      </>
    )
  }
}

export default EventList
