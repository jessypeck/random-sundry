import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IconButton extends React.Component{
  state = {
    redirect: false
  }

  redirect = () => {
    this.setState({
      redirect: true
    })
  }

  render(){
    return(
      <Link to={this.props.url}>
        <div className='iconButton'>
          <FontAwesomeIcon icon={this.props.icon} className='' size='2x'/>
          <div className="iconButton__label">{this.props.label}</div>
          {/* {this.state.redirect && <Redirect to={this.props.url} />} */}
        </div>
      </Link>
      
    )
  }
}

export default IconButton;