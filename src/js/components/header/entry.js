/**
 * Created by lai on 2016/3/31.
 */
import React from 'react';
import Header from './js/header.js';
import Top from './js/top.js';
import $ from 'jquery';

let Head = React.createClass({
    render(){
        return (
            <Header>
                <Top>12341241</Top>
            </Header>
        );
    }
});

React.render(
    <div >111111111111111</div>,
    $('#header')
)