import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      placesData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount = async () => {
    const places = await axios.get('http://localhost:4567/places');
    console.log(places)
    const apiDataLoaded = true;
    this.setState({places,apiDataLoaded});
  }

  
  showPlacesOnPage() {
    return this.state.placesData.map((place) => {
      return (
        <div>
          <h1>
            {place.name}
            {place.region}
          </h1>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.apiDataLoaded) ? this.showPlacesOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;