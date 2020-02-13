import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { v4 } from 'uuid'
import { connect } from 'react-redux'
import { createEventAction, deleteEventAction, updateEventAction } from '../../../store/Event/eventActions'
class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = v4()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEventAction(newEvent)
    this.setState((prevState) => ({
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
    this.props.updateEventAction(updatedEvent)
    this.setState((prevState) => ({
      isOpen: false,
      selectedEvent: null
    }))
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEventAction(id)
  }

  render () {
    const { isOpen, selectedEvent } = this.state
    const { events } = this.props
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList events={events} onSelectEvent={this.handleSelectEvent} onHandleDeleteEvent={this.handleDeleteEvent} />
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

const mapStateToProps = state => (
  {
    events: state.events
  }
)
const actions = { updateEventAction, createEventAction, deleteEventAction }
export default connect(mapStateToProps, actions)(EventDashboard)
