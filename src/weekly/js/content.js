/**
 * Created by lai on 2016/5/13.
 */
import React from 'react'
import Info from '../../js/info'
import '../less/content.less'

let ContnetInfo = React.createClass({
    getInitialState: function(){
        return {
            contentsInfo: Info.contentsInfo
        }
    },
    render: function () {
        return (
            <div>{
                Info.contentsInfo.map(function (info) {
                    return (
                        <div>{
                            <div className="content">
                                <h3 className="title">{info.title}</h3>
                                <p>{info.content}</p>
                                <a href={info.link} target="_blank">查看详情</a>
                            </div>
                        }{
                            <div className={info.name} style={{backgroundImage: info.backgroundImage}}></div>
                        }</div>
                    )
                })
            }</div>
        )
    }
});

//let Contents = React.Creact
export default ContnetInfo