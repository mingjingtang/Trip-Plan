import React, { Component } from 'react';
import '../TripItem/TripItem.css';
import { Button, Image, List } from 'semantic-ui-react'
import axios from 'axios'


class TripItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            category: '',
            region: '' 
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]:event.target.value });
    }

    handleSubmit = async(event) => {
        // this.setState({ [event.target.name]:event.target.value });
        event.preventDefault();
        event.target.edit && console.log('edit')
        event.target.submit && console.log('submit')

        
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
    handleChange = (event)  => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateName = (e) => {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }
   updateStuff = (e, name, category, region) => {
       console.log(e.target.name)
    // this.setState({
    //     name: e.target.name,
    //     category: e.target.category,
    //     region: e.target.region
    // })

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


    render() {
        // console.log(this.state)
        return (
            <div className="tripItem">
                <div>
                    <br></br>
                    <p>name: {this.props.tripName}</p>
                    <p>category: {this.props.tripCategory}</p>
                    <p>region: {this.props.tripRegion}</p>
                    <br></br>
                </div>

            

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    <input type="text" name="category" value={this.state.value} onChange={this.handleChange} />
                    <input type="text" name="region" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="submit" id="submit" name="submit">submit</button>
                </form>


                <button className="button is-rounded"
                    onClick={this.props.update}>
                    Edit
                </button>

                <button className="button is-rounded"
                    onClick={(e)=> this.props.onClick3(e,this.props.id)} >
                    Delete
                </button>

                <form onSubmit={e => this.updateStuff(e, this.state.name, this.state.category, this.state.region)}>
                    <label>
                        Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.updateName} />
                    <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    <input type="text" name="region" value={this.state.region} onChange={this.handleChange} />
                    </label>
                    <button type="submit" id="submit" name="Edit">Edit</button>
                </form>
            </div>
        )
    }
}

export default TripItem