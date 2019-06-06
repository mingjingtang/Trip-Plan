import React, { Component } from 'react';
import '../PlaceItem/PlaceItem.css'
import { Card, Icon, Image } from 'semantic-ui-react'

class PlaceItem extends Component {
    render() {
        const newTrip = {
            image: `${this.props.placeImage}`,
            name: `${this.props.placeName}`,
            region: `${this.props.placeRegion}`,
            isTrip: true
        }

        return (
            <div className="placeItem">
                 <Card>
                    <img src = {this.props.placeImage} style={{width: '20.8em', height: '12em'}}/>
                    <Card.Content>
                        <Card.Header>name: {this.props.placeName}</Card.Header>
                        <Card.Meta>region: {this.props.placeRegion}</Card.Meta>
                        <Card.Description>
                            Card description that you can add.
                        </Card.Description>
                        </Card.Content>
                    <Card.Content extra>
                        <button onClick={(e) => (this.props.onClick1(newTrip))}>
                            Add to my trip
                        </button>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default PlaceItem