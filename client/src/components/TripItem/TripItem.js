import React, { Component } from 'react';
import '../TripItem/TripItem.css';
import { Button, Image, List } from 'semantic-ui-react'
import axios from 'axios'
import { Divider } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'

class TripItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            region: ''
        };
    }


    handleAdd = async (event) => {
        event.preventDefault();
        // event.target.edit && console.log('edit')
        // event.target.submit && console.log('Add')

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


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    // updateName = (e) => {
    //     console.log(e.target.value)
    //     this.setState({
    //         name: e.target.value
    //     })
    // }


    updateTrip = (e, name, category, region) => {
        console.log(e.target.name)


        let data = {
            "name": this.state.name,
            "category": this.state.category,
            "region": this.state.region
        }

        this.props.update(e, this.props.id, data)
        this.props.editTrip(name, category, region)
        this.props.render()

    }

    componentDidMount = () => {
        this.setState({
            name: this.props.tripName,
            category: this.props.tripCategory,
            region: this.props.tripRegion
        })
    }

    newFunction = () => {
        console.log(this.props.placesUnderTrips)
         let renderPlacesUnderTrips = this.props.placesUnderTrips.map((place) => (
            <div>
                {/* <p>key = {index}</p> */}
                <br></br>
                <p>placeName : {place.name}</p>
                <p>placeRegion : {place.region}</p>
                <p>placeImage : {place.image}</p>
                <br></br>
            </div>           
        ))
        return renderPlacesUnderTrips
    }

    
    render() {
        console.log(this.props.id)
        // console.log(this.props.onClickShowPlaces)


        
        return (
            <div className="tripItem">
                <div>
                    <br></br>
                    <Header as='h2'>{this.props.tripName}</Header>
                    <p>category: {this.props.tripCategory}</p>
                    <p>region: {this.props.tripRegion}</p>
                    <br></br>
                </div>

                {this.props.placesUnderTrips && this.newFunction()}

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
                  
                    <button type="submit" name="submit">Add</button>

                    <button className="button is-rounded"
                    onClick={(e) => this.props.handleDelete(e, this.props.id)} >
                    Delete
                </button>
                </form>


            
                <form onSubmit={e => this.updateTrip(e, this.state.name, this.state.category, this.state.region)}>
                    <label>
                        Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                        <input type="text" name="region" value={this.state.region} onChange={this.handleChange} />
                    </label>
                    <button type="submit" name="Edit">Edit</button>
                </form>

                <button 
                    onClick={(e) => (this.props.onClickShowPlaces(e, this.props.id))}
                >Show all the places</button>

                <Divider />
            </div>
        )
    }
}

export default TripItem