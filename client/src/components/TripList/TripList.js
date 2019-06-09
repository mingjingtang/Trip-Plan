import React, { Component } from 'react';
import TripItem from '../TripItem/TripItem'
import '../TripResult/TripResult.css'

class TripList extends Component{
    render(){
        console.log(this.props.placesUnderTrips);

        let renderTrips = this.props.trips? this.props.trips.map((trip, index) => {
            return <TripItem  
                onClick2 = {this.props.onClick2}
                handleDelete = {this.props.handleDelete}
                handleDeletePlace={this.props.handleDeletePlace}
                render = {this.props.render}
                update = {this.props.update}
                editTrip={this.props.editTrip}
                placesUnderTrips={this.props.placesUnderTrips}
                onClickShowPlaces={this.props.onClickShowPlaces}

                key = {index}
                id = {trip.id}
                tripName = {trip.name}
                tripCategory = {trip.category}
                tripRegion = {trip.region}
            />
        }) : null;




        return(
            <div className = "TripList">
                {renderTrips}
            </div>
        )
    }
}

export default TripList