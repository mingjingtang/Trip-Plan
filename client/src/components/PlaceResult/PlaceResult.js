import React, { Component } from 'react';
import PlaceList from '../PlaceList/PlaceList';
import '../PlaceResult/PlaceResult.css';

class PlaceResult extends Component{
    render(){
        // console.log(this.props.places)
        return(
            <div className = "result">
                <div className = "placeResult">
                    <PlaceList 
                        places={this.props.places}
                        onClick1 = {this.props.onClick1}
                    />
                </div>
            </div>
        )
    }
}
export default PlaceResult