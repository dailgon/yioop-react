import React, { Component } from 'react';

class Videos extends Component {
    constructor(props){
        super(props);
        console.log(props.location.state)
    }
    componentDidMount(){
        console.log('Loading API data for Videos');
    }
    componentWillUnmount(){
        console.log('Unmounting Search/Videos Component');
    }
    render(){
        //console.log(this.props.location.state);
        return(
                <h2>Videos</h2>
        );
    }
}

export default Videos;