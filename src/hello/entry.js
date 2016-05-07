/**
 * Created by lai on 3/30/16.
 */
import React from 'react';
import Hello from './js/hello.js';

let App = React.createClass({
    render(){
        return (
            <Hello />
        );
    }
});

React.render(
    <App />,
    document.body
)
