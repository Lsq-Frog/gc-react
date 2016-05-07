/**
 * Created by lai on 3/30/16.
 */
import React from 'react';
import '../less/index.less'
let names = ['Alice', 'Emily', 'Kate'];

let HelloM = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0,
            of : 0
        };
    },

    componentDidMount: function () {
        this.timer = setInterval(function () {
            let opacity = this.state.opacity, of = this.state.of;
            if (opacity <= 0) {
                of = .05;
            }else if(opacity >= 1) {
                of = -.05
            }
            opacity += of;
            this.setState({
                opacity: opacity,
                of: of

            });
        }.bind(this), 100);
    },

    setButtonBHtmlText: function() {
        let prefs = this.props.getInfo.ssssm;
        console.log(prefs,this,this.refs.ssss.getDOMNode());
    },

    render: function () {
        return (
            <button ref="ssss" style={{opacity: this.state.opacity}} onClick={this.props.getInfo}>
                Hello {this.props.name}
            </button>
        );
    }
});
let HelloN = React.createClass({
    getInitialState: function(){
        //确定初始状态
        return {
            clicked: false
        };
    },
    getDragonKillingSword: function(){
        //送宝刀
        alert('送你一把宝刀又何妨');
        //修改点击状态
        this.setState({
            clicked: true
        });
    },
    render: function(){
        var clicked = this.state.clicked;
        if(clicked)
            return (<button disabled="disabled" onClick={this.getDragonKillingSword}>屠龙宝刀，点击就送</button>);
        else
            return (<button onClick={this.getDragonKillingSword}>屠龙宝刀，点击就送!!</button>);
    }
});

var HelloS = React.createClass({
    getInitialState: function() {
        return {userInput: ''};
    },
    handleChange: function(e) {
        this.setState({userInput: e.target.value});
    },
    clearAndFocusInput: function() {
        // Clear the input
        this.setState({userInput: ''}, function() {
            // This code executes after the component is re-rendered
            this.refs.theInput.getDOMNode().focus();   // Boom! Focused!
        });
    },
    render: function() {
        return (
            <div>
                <div onClick={this.clearAndFocusInput}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});

let Hello = React.createClass({
    getInfo: function(){
        console.log(this.refs);
        console.log(this.refs.ssssm.getDOMNode(), this.refs.sssn.getDOMNode());
        this.refs.ssssm.getDOMNode().name = 'sdfsd';
        this.refs.sssn.getDOMNode().style.height = '100px';
    },
    render(){
        return (
            <div ref="sssn" name="32342" onClick={this.getInfo}>
                <HelloM name="sdfasdfadsfa" ref="ssssm"/>
                <HelloN />
                <HelloS />
            </div>
        );
    }
});

export default Hello;

