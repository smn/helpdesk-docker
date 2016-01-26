import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

  render() {
    return (
        <div>
          <h2>Welcome to the helpdesk prototype</h2>
          <ul>
            <li><Link to='/login'>Login as normal user</Link></li>
          </ul>
          { this.props.children }
        </div>
    );
  }
}

export default Home;
