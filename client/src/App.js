import React, { Component } from 'react';
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
      activeItem: 'home'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount = async () => {
    const places = await axios.get('http://localhost:4567/places');
    console.log(places)
    this.setState({ placesData: places, apiDataLoaded: true });
  }


  showPlacesOnPage() {
    return this.state.placesData.data.map((place) => {
      return (
        <div>
          <h1>
            <img src = {place.image} style={{width: '10em', height: '6em'}}/>
            {place.name}<br></br>
            {place.region}
          </h1>
        </div>
      );
    });
  }


  render() {
    const { activeItem } = this.state
    const src = '/images/wireframe/image.png'

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Places'
            active={activeItem === 'Places'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Your Trips'
            active={activeItem === 'Your Trips'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>


        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <div>{(this.state.apiDataLoaded) ? this.showPlacesOnPage() : <p>Loading...</p>}</div>
              
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