import React, { Component } from 'react';
import TripItem from '../TripItem/TripItem'
import '../TripResult/TripResult.css'
import axios from 'axios'


class TripList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            region: ''
        };
    }


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAdd = async (event) => {
        event.preventDefault();
        await axios.post(
            "http://localhost:4567/users/1/trips",
            {
                name: this.state.name,
                category: this.state.category,
                region: this.state.region,
                user_id: 1
            }
        )
        this.props.render();
    }


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
                <form onSubmit={this.handleAdd}>
                    <label>
                        Name
                    </label>
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />

                    <label>
                        category
                    </label>
                    <input type="text" name="category" value={this.state.value} onChange={this.handleChange} />

                    <label>
                        region
                    </label>
                    <input type="text" name="region" value={this.state.value} onChange={this.handleChange} />

                    <button type="submit" name="submit">
                        Add
                    </button>
                </form>



                {renderTrips}


            </div>
        )
    }
}

export default TripList