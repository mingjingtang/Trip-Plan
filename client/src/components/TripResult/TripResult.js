import React, { Component } from 'react';
import TripList from '../TripList/TripList'
import '../TripResult/TripResult.css'

class TripResult extends Component{
    render(){
        console.log(this.props.trips)
        return(
            <div className = "myFavoriteBooks">
                <TripList 
                    trips = {this.props.trips}
                    onClick2 = {this.props.onClick2}
                />
            </div>
        )
    }
}
export default TripResult