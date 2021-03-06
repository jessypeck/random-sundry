import React from 'react';
import { setLoggedOut } from '../../actions/authActions';
import {connect} from 'react-redux';
import IconButton from './../IconButton.jsx';
import {faHome} from '@fortawesome/pro-light-svg-icons/faHome';
import {faBookOpen} from '@fortawesome/pro-light-svg-icons/faBookOpen';
import {faSignInAlt} from '@fortawesome/pro-light-svg-icons/faSignInAlt';


class LogOutPage extends React.Component{

  componentDidMount(){
    console.log('mounted logout page')
    this.sendLogOutRequest();
  }

  sendLogOutRequest(){
    console.log('Sending logout request...');
    fetch('/auth/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then(() => {
      this.props.dispatch(setLoggedOut());
      console.log('Done fetching');
    })
  }
  


  render(){
    return(
      <div className='logOutPageWrapper'>
        <div className='logOutTitle'>You are now logged out.</div>
        <div className="logOutText">Thanks for visiting!</div>
        <div className="logOutPageButtons">
          <IconButton label='Home' url='/' icon={faHome} />
          <IconButton label='Browse' url='ruins' icon={faBookOpen} />
          <IconButton label='Login' url='login' icon={faSignInAlt} />
        </div>  
      </div>
    )
  }
}

export default connect()(LogOutPage);