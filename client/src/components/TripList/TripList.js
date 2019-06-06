import React, { Component } from 'react';
import TripItem from '../TripItem/TripItem'
import '../TripResult/TripResult.css'

class TripList extends Component{
    render(){
        let renderTrips = this.props.trips? this.props.trips.map((trip, index) => {
            return <TripItem  
                // handleOnClick2 = {this.props.handleOnClick2}
                key = {index}
                id = {index}
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