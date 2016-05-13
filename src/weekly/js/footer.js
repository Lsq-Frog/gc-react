/**
 * Created by lai on 2016/5/13.
 */
import React from 'react'
import Info from '../../js/info'
import '../less/footer.less'

let Footer = React.createClass({
    getInitialState: function(){
        return {
            officialWebsite: Info.footerInfo.officialWebsite,
            email: Info.footerInfo.email,
            tel: Info.footerInfo.tel,
            backgroundImage: Info.footerInfo.backgroundImage
        }
    },
    render: function(){
        return (
            <div className="footer">
                <div className="left">
                    <p>如需了解更多信息，请订阅Godocker 精灵云公众号也可以通过下列方式联系我们：</p>
                    <p>网 站：<a href={this.state.officialWebsite} >{this.state.officialWebsite}</a></p>
                    <p>邮 箱：<a href="javascript:;">{this.state.email}</a></p>
                    <p>电 话：{this.state.tel}</p>
                </div>
                <div className="right" style={{backgroundImage: this.state.backgroundImage}}></div>
            </div>
        )
    }
});

export default Footer