import React, { Component } from 'react';
import PlaceItem from '../PlaceItem/PlaceItem'
import { Card } from 'semantic-ui-react';

class PlaceList extends Component{
    render(){
        let renderPlaces = this.props.places ? this.props.places.map((place, index) => {
            return <PlaceItem
                onClick1 = {this.props.onClick1} 
                trips = {this.props.trips}
                key = {index}
                id = {place.id}
                placeImage = {place.image}
                placeName = {place.name}
                placeRegion = {place.region}
            />
        }) : null;

        return(
            <div className = "placeList">
                <Card.Group itemsPerRow={3}>
                    {renderPlaces}
                </Card.Group>  
            </div>
        )
    }
    
}
export default PlaceList