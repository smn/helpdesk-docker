import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({})

export class HomeView extends React.Component {
  static propTypes = {};

  render () {
    return (
        <div>
          <h2>Welcome to the helpdesk prototype</h2>
          <ul>
            <li><Link to='/login'>Login as normal user</Link></li>
          </ul>

        </div>
    )
  }
}

export default connect(mapStateToProps, {})(HomeView)
