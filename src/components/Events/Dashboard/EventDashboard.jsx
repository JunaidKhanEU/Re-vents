import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { v4 } from 'uuid'

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null
  }

  // handleIsOpenToggle =() => {
  //   this.setState((prevState) => {
  //     return {
  //       isOpen: !prevState.isOpen
  //     }
  //   })
  // }

  handleCreateEvent = (newEvent) => {
    newEvent.id = v4()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
      isOpen: false
    }))
  }

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    })
  }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleCreateFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  handleUpdateEvent =(updatedEvent) => {
    this.setState((prevState) => ({
      events: prevState.events.map(event => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent }
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    }))
  }

  render () {
    const { events, isOpen, selectedEvent } = this.state
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList events={events} onSelectEvent={this.handleSelectEvent}  />
          </GridColumn>
          <GridColumn width={6}>
            <Button
              positive
              content='Create Event'
              onClick={this.handleCreateFormOpen}
            />
            {
              isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} onCancelFormOpen={this.handleCreateFormCancel} onCreateEvent={this.handleCreateEvent} selectedEvent={selectedEvent} onUpdateEvent={this.handleUpdateEvent} />
            }
          </GridColumn>
        </Grid>
        {this.props.children}
      </div>
    )
  }
}

export default EventDashboard
