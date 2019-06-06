import React, { Component } from 'react';
import '../PlaceItem/PlaceItem.css'
import { Card, Icon, Image } from 'semantic-ui-react'
// import Popup from "reactjs-popup";
import { Header, Button, Popup, Grid } from 'semantic-ui-react'
import TripItem from '../TripItem/TripItem'

class PlaceItem extends Component {
    render() {
        const newTrip = {
            image: `${this.props.placeImage}`,
            name: `${this.props.placeName}`,
            region: `${this.props.placeRegion}`,
            isTrip: true
        }
        
        return (
            <div className="placeItem">
                <Card>
                    <img src={this.props.placeImage} style={{ width: '20.8em', height: '12em' }} />
                    <Card.Content>
                        <Card.Header>name: {this.props.placeName}</Card.Header>
                        <Card.Meta>region: {this.props.placeRegion}</Card.Meta>
                        <Card.Description>
                            Card description that you can add.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {/* <button onClick={(e) => (this.props.onClick1(newTrip))}>
                            Add to my trip
                        </button> */}

                        <Popup trigger={<Button onClick={(e) => (this.props.onClick1(newTrip))}>Add to my trip</Button>} flowing hoverable>
                            <Grid centered divided columns={3}>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>trip1 place</Header>
                                    <p>
                                        <b>trip1 detail</b> 
                                    </p>
                                    <Button >Choose</Button>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>trip2 place</Header>
                                    <p>
                                        <b>trip2 detail</b> 
                                    </p>
                                    <Button>Choose</Button>
                                </Grid.Column>
                            </Grid>
                        </Popup>

                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default PlaceItem