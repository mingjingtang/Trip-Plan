import React, { Component } from 'react';
import '../PlaceItem/PlaceItem.css'
import { Card, Icon, Image } from 'semantic-ui-react'
// import Popup from "reactjs-popup";
import { Header, Button, Popup, Grid } from 'semantic-ui-react'
import TripItem from '../TripItem/TripItem'

class PlaceItem extends Component {
    render() {
        const newTrip = {
            id: this.props.id,
            name: `${this.props.placeName}`,
            region: `${this.props.placeRegion}`,
            image: `${this.props.placeImage}`,
            // trip_id: 1,
            // user_id: 1
            // isTrip: true
            // place_id: this.props.id
        }

        // console.log(this.props.trips)
        // console.log(this.props.id)
        
        
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


                        <Popup trigger={<Button>Add</Button>} flowing hoverable>
                            <Grid centered divided columns={3}>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>Summer Trip</Header>
                                    <p>
                                        <b>Advanture</b>
                                    </p>
                                    <Button onClick={(e) => (
                                        this.props.onClick1(this.props.id)
                                    )} >Add to trip</Button>
                                </Grid.Column>
                                <Grid.Column textAlign='center'>
                                    <Header as='h4'>Road Trip</Header>
                                    <p>
                                        <b>Relax</b>
                                    </p>
                                    <Button>Add to trip</Button>
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