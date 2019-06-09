import React, { Component } from 'react';
import '../PlaceItemTripChoice/PlaceItemTripChoice.css'
import { Header, Button, Popup, Grid } from 'semantic-ui-react'


class PlaceItemTripChoice extends Component {

    newFunction = () => {
         let renderTrips = this.props.trips.map((trip) => (
            <div>
                <Grid.Column textAlign='center'></Grid.Column>
                    <Header as='h4'>{trip.name}</Header>
                    <p>
                        <b>{trip.category}</b>
                    </p>
                    <Button 
                        onClick={(e)=>(this.props.onClick1(trip.id, this.props.placeId))} 
                        >Add to trip
                    </Button>
            </div>           
        ))
        return renderTrips
    }


    render() {
        return (
            <div>
                {this.props.trips && this.newFunction()}
            </div>
        )
    }
}

export default PlaceItemTripChoice