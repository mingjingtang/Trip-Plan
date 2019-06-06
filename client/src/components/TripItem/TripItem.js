import React, { Component } from 'react';
import '../TripItem/TripItem.css'

class TripItem extends Component{
    render(){
        console.log(this.props.id)
        return(
            <div className = "tripItem">
                <div>
                    <p>name: {this.props.tripName}</p>
                    <p>category: {this.props.tripCategory}</p>
                    <p>region: {this.props.tripRegion}</p>
                    <br></br>
                </div>

                {/* <button className="button is-rounded"
                        onClick = {(e) => this.props.handleOnClick2(this.props.id)}>
                        Delete
                </button> */}
            </div>
        )
    }
}

export default TripItem