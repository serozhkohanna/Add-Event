import React, { Component } from 'react';

interface Props {
  openState: boolean;
}

class EventForm extends Component <Props> {
  renderEventForm = () => {
	return <div>fhjds</div>
  }

  render() {
	return <section>
	  {this.props.openState && this.renderEventForm()}
	</section>
  }
}

export default EventForm;