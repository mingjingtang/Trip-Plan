import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
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

      // activeItem: 'home',
      places:[],
      trips: []
    };
  }

  componentDidMount = async () => {
    const places = await axios.get('http://localhost:4567/places');
    console.log(places)
    this.setState({ placesData: places.data, apiDataLoaded: true });
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick = async(e, newPlace) => {
    console.log('this component is clicked')

    await this.setState(prevState => ({
      trips: [...prevState.trips,newPlace],
    }))
    // await this.setState({
    //   activeItem: newPlace
    // })

    console.log(this.state.trips)
  }


  render() {
    const { activeItem } = this.state
    const src = '/images/wireframe/image.png'

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Link to="/PlaceResult" >
              <Menu.Item
                name='Places'
                // active={activeItem === 'Places'}
                // onClick={this.handleItemClick}
              />
          </Link>
          
          <Menu.Item
            name='Your Trips'
            // active={activeItem === 'Your Trips'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              // active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>


        <main>
          <Route 
            exact path = "/PlaceResult"
            render={()=><PlaceResult
              places = {this.state.placesData}
              onClick={this.handleItemClick}
              // onClick2={this.handleItemClick2}
            />}
          />
        </main>


        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              {/* <div>{(this.state.apiDataLoaded) ? this.showPlacesOnPage() : <p>Loading...</p>}</div> */}
              
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
             </Card.Description>
             </Card.Content>
              <Card.Content extra>
              <button>
                  Add to my trip
              </button>
          </Card.Content>
          </Card>
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
          <Card raised image={src} />
        </Card.Group>

      </div>
    );
  }
}

export default App;