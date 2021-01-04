import React from 'react';
import axios from 'axios';

class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const fakeRequest = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.692390,-73.914880&radius=2000&type=restaurant&key=AIzaSyByaqFNRm8cBAWr4q5C3_-D0mv355NJOaA'
        const frontReq = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        axios({method: 'get', url: `/restaurants/?location=${this.props.location.latitude},${this.props.location.longitude}&radius=2000&type=restaurant&key=AIzaSyByaqFNRm8cBAWr4q5C3_-D0mv355NJOaA`, headers: { "Access-Control-Allow-Origin": '*'} })
            .then((response) => {
                console.log('request made and recieved', response)
                this.setState({
                    restaurantList: response.data
                })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    render() {
        if (this.state.restaurantList !== undefined) {
            return (
                <div>
                    {this.state.restaurantList.map((restaurant, index) => {
                        return (
                            <div key={index}>{restaurant.name} Price Level:{restaurant.price_level} Rating:{restaurant.rating}</div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className='restaurantList'>
                    Please wait while we find restaurants
                </div>
            )
        }
    }
}


export default Restaurants