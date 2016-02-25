import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link, IndexLink, hashHistory} from 'react-router';
import { logout } from 'redux/modules/auth';

@connect(
  state => ({
    email: state.auth.email,
    password: state.auth.password,
    loggedIn: state.auth.loggedIn
  }),
  dispatch => ({
    logout: () => dispatch(authActions.logout())
  })
)

export default class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    //const styles = require('./Dashboard.scss');
    return (
      <nav className="navbar navbar-page">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="javascript:void(0)" className="navbar-brand">
              <img src="img/logo-blue.svg" alt="MetaDisk" className="logo"/>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-left">
              <li><IndexLink to='/dashboard'>Buckets</IndexLink></li>
              <li><Link to='/dashboard/api'>API</Link></li>
              <li><Link to='/dashboard/billing'>Billing</Link></li>
              <li><Link to='/dashboard/support'>Support</Link></li>
            </ul>
            <div className="navbar-right">
              <a href="javascript:void(0)" onClick={this.handleLogout.bind(this)} className="btn btn-menu btn-transparent">Logout</a>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}