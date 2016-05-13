/**
 * Created by lai on 2016/5/13.
 */
import React from 'react'
import '../less/index.less'
import Top from './js/top'
import Footer from './js/footer'
import ContnetInfo from './js/content'

let App = React.createClass({
    render(){
        return (
            <div className="container">
                <Top />
                <ContnetInfo />
                <Footer />
            </div>
        );
    }
});

React.render(
    <App/>,
    document.body
)