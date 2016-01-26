import React from 'react';
import Header from '../components/header.jsx'

const App = (props) => {
    return (
      <div>
        <div className="content">
          {props.children}
        </div>
      </div>
    );
};

export default App;
