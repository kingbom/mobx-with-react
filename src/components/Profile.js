import React, { Component } from 'react';
import liffHelper from '../utils/liffHelper';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
      }
    };
    
  }

  componentWillMount() {
    liffHelper.getProfile().then(profile => this.setState({ profile }));
  }

  render() {
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <hr />
          <div className="form-group">
            <label htmlFor="userid">User ID:</label>
            <input type="text" className="form-control" disabled id="userid" value={this.state.profile.userId} />
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