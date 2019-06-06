import React, { Component } from 'react';
import '../PlaceItem/PlaceItem.css'

class PlaceItem extends Component{
    render(){
        const newTrip = {
            image: `${this.props.placeImage}`,
            name: `${this.props.placeName}`,
            region:`${this.props.placeRegion}`,
            isTrip: true
        }

        return(
            <div className = "placeItem"> 
                <div>
                    <div> 
                        <img src = {this.props.placeImage} alt=""/>
                    </div>
                    <div>
                        <p>name: {this.props.placeName}</p>
                        <p>region: {this.props.placeRegion}</p>
                    </div>
                </div>

                
                <button className = "button is-danger is-rounded"
                        onClick={ (e) => (this.props.handleOnClick(newTrip))}>
                        Add to my trip list
                </button>
            </div>
        )
    }
}
export default PlaceItem