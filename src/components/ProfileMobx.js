import React, { Component} from "react";
import { inject, observer } from 'mobx-react';
import liffHelper from '../utils/liffHelper';

class Profile extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          profile: {
          }
        };
      }
    
    componentWillMount() {
        const profile = liffHelper.getProfile().then(profile => profile);
        this.props.userinfo.setUserId(profile.userId ? profile.userId : "1");
    }

    render() {
        const user = this.props.userinfo.getInfoJS();
        return (
            <div className="page-content">
                <div className="col-lg-3" />
                <div className="col-lg-6">
                <hr />
                <div className="form-group">
                    <label htmlFor="userid">User ID:</label>
                    <input type="text" className="form-control" disabled id="userid" value={user.userId} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Display Name:</label>
                    <input type="text" className="form-control" disabled id="name" value={this.state.profile.displayName} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status Message:</label>
                    <input type="text" className="form-control" disabled id="status" value={this.state.profile.statusMessage} />
                </div>
                </div>
                <div className="col-lg-3" />
            </div>
            );
      }
}

export default inject('userinfo')(observer(Profile));