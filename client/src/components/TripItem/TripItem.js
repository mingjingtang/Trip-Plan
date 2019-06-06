import React, { Component } from 'react';
import '../TripItem/TripItem.css';
import { Button, Image, List } from 'semantic-ui-react'

class TripItem extends Component{
    render(){
        console.log(this.props.id)
        return(
            <div className = "tripItem">
                <div>
                    <br></br>
                    <p>name: {this.props.tripName}</p>
                    <p>category: {this.props.tripCategory}</p>
                    <p>region: {this.props.tripRegion}</p>
                    <br></br>
                </div>

                {/* <button className="button is-rounded"
                        onClick = {(e) => this.props.onClick4(this.props.id)}>
                        Add
                </button> */}
                
                {/* <button className="button is-rounded"
                        onClick = {(e) => this.props.onClick3(this.props.id)}>
                        Edit
                </button>*/}

                <button className="button is-rounded"
                        onClick = {(e) => this.props.onClick2(this.props.id)}>
                        Delete
                </button>
            </div>
        )
    }
}

export default TripItem