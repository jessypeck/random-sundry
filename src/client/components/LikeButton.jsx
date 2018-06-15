import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

class LikeButton extends React.Component{
  state = {
    liked: false
  }

  // resets "liked" state whenever RandomCard sends in new props
  componentWillReceiveProps(){
    this.setState(() => ({
      liked: false
    }))
  }

  handleClick = (e) => {
  const icon = e.target;

    // TO-DO: If not logged in, pop up a modal saying "you need to be logged in"
    // ALSO: A pop-up modal for nicknaming??

    // If previously liked, unlike
    if (this.state.liked){
      this.setState((prevState) => ({
        liked: false
      }))
    }
    // Else, like
    else{
      this.addToFaves();
      this.setState((prevState) => ({
        liked: true
      }))
    }
  }

  addToFaves = () => {
    console.log('Liking:')
    console.log(this.props)
    const url = '/api/new-fave'
    const newFaveJson = this.props;
    fetch(url, {
      method: 'POST',
      credentials: 'include', // sends session token
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(newFaveJson)
    }).then((res) => {
      return res.json();
    }).then((info) => {
      console.log(info);
    })
  }

  // When "liked", render a bouncy red heart. When "unliked", return to grey heart.
  render(){
    return(
      <div onClick={this.handleClick} className='cardIcon'>
        {this.state.liked &&
          <FontAwesome icon={faHeart} className='cardIcon--red bounce'/>
        }
        {!this.state.liked &&
          <FontAwesome icon={faHeart} />
        }

      </div>
    )
  
  }
}

export default LikeButton;