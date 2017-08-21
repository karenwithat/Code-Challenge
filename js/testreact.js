import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import customData from './customData.json';
import Profile from './components/profile';
import Hobbies from './components/hobbies';

import React, {Component} from 'react';

var Hobbies = React.createClass({
render: function(){
    var hobbies = this.props.hobbyList.map(function(hobby, index){
        return (<li key={index}>{hobby}</li>);
    });

    return (
        <div>
            <h5>My hobbies:</h5>
            <ul>
                {hobbies}
            </ul>
        </div>
    );
  }
});
