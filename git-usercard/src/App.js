import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/usercard.js';
import FollowersCard from './components/followersCard.js';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      user: {},
      followers: [],
      followers_url: ''
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/freddiet803')
    
    .then(res => {
      console.log("this is response ");
      console.log(res);
      this.setState({
        user: res.data,
        followers_url: res.data.followers_url
      });
    })
    .catch(err =>{
      console.log(err);
    });
    
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.followers_url !== prevState.followers_url){
      axios.get(this.state.followers_url)
      .then(res1 =>{
      console.log(res1);
      console.log(res1.data);
      this.setState({
        followers: res1.data
        
      })
      
    })
    }
  }


  render(){
  return (
    <div className="App">
      Hello from React GitHub User Card App!
      <UserCard userInfo={this.state.user}/>
      <FollowersCard followerInfo={this.state.followers}/>
    </div>
  );
}
}

export default App;
