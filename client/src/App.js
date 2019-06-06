import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import PlaceResult from './components/PlaceResult/PlaceResult'
import TripResult from './components/TripResult/TripResult'
import axios from 'axios'
import './App.css';
import { Menu, Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'



class App extends Component {
  constructor() {
    super();
    this.state = {
      placesData: null,
      apiDataLoaded: false,

      tripsData: null,
      apiDataLoadedTrips: false,

      activeItem: 'home',
    };
  }

  componentDidMount = async () => {
    //get places data
    const places = await axios.get('http://localhost:4567/places');
    console.log(places)
    this.setState({ placesData: places.data, apiDataLoaded: true });

    //get trips data
    const trips = await axios.get('http://localhost:4567/users/1/trips');
    console.log(trips)
    this.setState({ tripsData: trips.data, apiDataLoadedTrips: true });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  handleItemClick1 = async(newPlace) => {
    console.log('this component is clicked')

    await this.setState(prevState => ({
      tripsData: [...prevState.tripsData,newPlace],
    }))

    console.log(this.state.tripsData)
  }

  handleItemClick2 = async (id) => {
    console.log('this is the id i am going to delete ' + id)
    const {tripsData} = this.state
    console.log('trip before splice' + this.state.tripsData)
    tripsData.splice(id, 1);
    console.log('trip after splice ' + this.state.tripsData)
    
    await this.setState(prevState => ({
        favoriteBooks: this.state.tripsData.filter(b=>{
            return b.isTrip === true
        })
    }))
  }


  render() {
    const { activeItem } = this.state
    const src = '/images/wireframe/image.png'

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
            
          <Link to="/PlaceResult">
          <Menu.Item 
              name='Places' 
              active={activeItem === 'Places'}
              onClick={this.handleItemClick}
              />
          </Link>
              

          <Link to="/TripResult">
          <Menu.Item
            name='Your Trips'
              active={activeItem === 'Your Trips'}
              onClick={this.handleItemClick}
          />
          </Link>


          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>


        <main>
          <Switch> 
          <Route 
            exact path = "/placeresult"
            render={()=><PlaceResult
              places = {this.state.placesData}
              onClick1={this.handleItemClick1}
              onClick2={this.handleItemClick2}
            />}
          />

          <Route
            path = "/tripresult"
            render={()=><TripResult
              trips = {this.state.tripsData}
              onClick2={this.handleItemClick2}
            />}
          />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;