import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import { connect } from 'react-redux'
import { createEventAction, deleteEventAction, updateEventAction } from '../../../store/Event/eventActions'

class EventDashboard extends Component {

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

  handleDeleteEvent = (id) => {
    this.props.deleteEventAction(id)
  }

  render () {
    const { events } = this.props
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList events={events} onHandleDeleteEvent={this.handleDeleteEvent} />
          </GridColumn>
          <GridColumn width={6}>
            <h2>Activity Feed</h2>
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
