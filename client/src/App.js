import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Menu, Segment} from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      placesData: null,
      apiDataLoaded: false,
      activeItem: 'home'
    };
  }

  componentDidMount = async () => {
    const places = await axios.get('http://localhost:4567/places');
    console.log(places)
    // const apiDataLoaded = true;
    this.setState({placesData:places,apiDataLoaded:true});
  }

  
  showPlacesOnPage() {
    return this.state.placesData.data.map((place) => {
      return (
        <div>
          <h1>
            {place.name}<br></br>
            {place.region}
          </h1>
        </div>
      );
    });
  }

  render() {
    // const { activeItem } = this.state
    return (
      <div>
        <div className="ui pointing secondary menu">
          <a className="active item">Home</a><a className="item">Messages</a>
          <a className="item">Friends</a>
          <div className="right menu"><a className="item">Logout</a></div>
        </div>
        <div className="ui segment">
          <img src="/images/wireframe/media-paragraph.png" />
        </div>
      </div>
    );
  }
}

export default App;