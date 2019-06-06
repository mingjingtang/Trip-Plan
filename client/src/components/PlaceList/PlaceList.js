import React, { Component } from 'react';
import PlaceItem from '../PlaceItem/PlaceItem'

class PlaceList extends Component{
    render(){
        let renderPlaces = this.props.places ? this.props.places.map((place, index) => {
            return <PlaceItem
                handleOnClick = {this.props.handleOnClick} 
                key = {index}
                placeImage = {place.image}
                placeName = {place.name}
                placeRegion = {place.region}
            />
        }) : null;
    
        
        return(
            <div className = "placeList">
                {renderPlaces}
            </div>
        )
    }
    
}
export default PlaceList