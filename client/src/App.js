import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import PlaceResult from './components/PlaceResult/PlaceResult'
import TripResult from './components/TripResult/TripResult'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import axios from 'axios'
import './App.css';
import { Menu, Segment, Card, Icon, Image } from 'semantic-ui-react'


class App extends Component {
  constructor() {
    super();
    this.state = {
      placesData: null,
      apiDataLoaded: false,

      tripsData: null,
      apiDataLoadedTrips: false,

      activeItem: 'home',

      tripName: "",
      tripCategory: "",
      tripRegion: ""
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


  handleDelete = async (event, id) => {
    console.log(this.props.id)
    event.preventDefault()

    await axios.delete(
      `http://localhost:4567/users/1/trips/${id}`
    )
    this.rerenderStuff()
  }

  handleUpdate = async (event, id, data) => {
    console.log(this.props.id)
    event.preventDefault()

    await axios.put(
      `http://localhost:4567/users/1/trips/${id}`, data)
    this.rerenderStuff()
  }

  editTrip = (name, category, region) => {
    console.log(name, category, region)
    this.setState({
      tripName: name,
      tripCategory: category,
      tripRegion: region
    })
  }

  rerenderStuff = async () => {
    let getTripData = await axios.get(
      `http://localhost:4567/users/1/trips/`
    )
    this.setState({
      tripsData: getTripData.data
    })
  }
  

  //didn't work yet
  handleItemClick1 = async (newPlace) => {
    console.log('this component is clicked')

    await this.setState(prevState => ({
      tripsData: [...prevState.tripsData, newPlace],
    }))

    console.log(this.state.tripsData)
    const ming = await axios.post('http://localhost:4567/placestrip')
  }

  //didn't work yet
  handleItemClick2 = async (id) => {
    console.log('this is the id i am going to delete ' + id)
    const { tripsData } = this.state
    console.log('trip before splice' + this.state.tripsData)
    tripsData.splice(id, 1);
    console.log('trip after splice ' + this.state.tripsData)

    await this.setState(prevState => ({
      favoriteBooks: this.state.tripsData.filter(b => {
        return b.isTrip === true
      })
    }))
  }


  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick} />
          </Link>

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
            <Link to="Login">
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu>


        <main>
          <Switch>
            <Route
              exact path="/placeresult"
              render={() => <PlaceResult
                places={this.state.placesData}
                trips={this.state.tripsData}
                onClick1={this.handleItemClick1}
                onClick2={this.handleItemClick2}
              />}
            />

            <Route
              path="/tripresult"
              render={() => <TripResult
                trips={this.state.tripsData}
                onClick2={this.handleItemClick2}
                render={this.rerenderStuff}
                update={this.handleUpdate}
                editTrip={this.editTrip}
                handleDelete={this.handleDelete}
              />}
            />

            <Route
              exact path="/login"
              render={() => <Login
              />}
            />

            <Route
              path="/"
              render={() => <Home
              />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;