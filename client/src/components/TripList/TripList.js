import React, { Component } from 'react';
import TripItem from '../TripItem/TripItem'
import '../TripResult/TripResult.css'

class TripList extends Component{
    render(){
        let renderTrips = this.props.trips? this.props.trips.map((trip, index) => {
            return <TripItem  
                onClick2 = {this.props.onClick2}
                onClick3 = {this.props.onClick3}
                render = {this.props.render}
                update = {this.props.update}
                key = {index}
                id = {trip.id}
                tripName = {trip.name}
                tripCategory = {trip.category}
                tripRegion = {trip.region}
                editTrip={this.props.editTrip}

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