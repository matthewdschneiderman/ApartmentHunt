import React from 'react';
import Description from './Description.jsx';
import Album from './Album.jsx';
import Navigation from './navigation.jsx';

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    console.log(props.user)
    }


    render () {

        return (
        <div>
            <Navigation/>
            <Album/>
            <Description/>
        </div>
        )
    }
}

export default Overview
