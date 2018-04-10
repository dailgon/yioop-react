import React, { Component } from 'react';

class News extends Component {
    constructor(props){
        super(props);
        console.log(props.location.state)
    }
    componentDidMount(){
        console.log('Loading API data for News');
    }
    componentWillUnmount(){
        console.log('Unmounting Search/News Component');
    }
    render(){
        //console.log(this.props.location.state);
        return(
                <h2>News</h2>
        );
    }
}

export default News;