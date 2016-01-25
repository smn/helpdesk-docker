import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '10.2',
    category: 'Atoms - Alerts',
    title: 'Closeable Alerts',
    description: 'just pass in a `onDismiss` function',
    code: `
<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
  <h4>Oh snap! You got an error!</h4>
  <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
  <p>
    <Button bsStyle="danger">Take this action</Button>
    <span> or </span>
    <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
  </p>
</Alert>
`
  }

  // getInitialState() {
  //   return {
  //     alertVisible: true
  //   };
  // }

  render () {
    return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>
      );
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

}
