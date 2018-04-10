import React, { Component } from 'react';

class Images extends Component {
    constructor(props){
        super(props);
        console.log(props.location.state)
    }
    componentDidMount(){
        console.log('Loading API data for Images');
    }
    componentWillUnmount(){
        console.log('Unmounting Search/Images Component');
    }
    render(){
        //console.log(this.props.location.state);
        return(
                <h2>Images</h2>
        );
    }
}

export default Images;