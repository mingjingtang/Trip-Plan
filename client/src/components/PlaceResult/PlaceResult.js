import React, { Component } from 'react';
import PlaceList from '../PlaceList/PlaceList';
import '../PlaceResult/PlaceResult.css';

class PlaceResult extends Component{
    render(){
        console.log(this.props.places)
        return(
            <div className = "result">
                <div className = "placeResult">
                    <PlaceList 
                        places={this.props.places}
                        handleOnClick = {this.props.handleOnClick}
                    />
                </div>
            </div>
        )
    }
}
export default PlaceResult