/**
 * Created by lai on 2016/5/13.
 */
import React from 'react'
import Info from '../../js/info'
import '../less/top.less'

let Top = React.createClass({
    getInitialState: function () {
        return {
            backgroundImage: Info.topInfo.backgroundImage
        };
    },
    render: function () {
        return (
            <div className="top" style={{backgroundImage: this.state.backgroundImage}}>
                <div className="logo"></div>
                <div className="title">国内专业的容器混合云平台提供商</div>
            </div>
        );
    }
});

export default Top