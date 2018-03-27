import React, { Component } from 'react';

class Web extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            searchResults: []
        };
        //console.log(props.location.state)
    }
    componentDidMount(){
        console.log('Loading API data for Web');

     //        fetch("https://www.yioop.com/?q=apple&f=json&callback=foo", {
//            method: 'GET',
//            mode: 'no-cors',
//            headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//            }
//        })
//        .then(res => res.json())
//        .then(
//                (result) => {
//                    this.setState({
//                        isLoaded: true,
//                        searchResults: result.items
//                    });
//                },
//                // Note: it's important to handle errors here
//                // instead of a catch() block so that we don't swallow
//                // exceptions from actual bugs in components.
//                (error) => {
//                    this.setState({
//                        isLoaded: true,
//                        error
//                    });
//                }
//        )
    }
    componentWillUnmount(){
        console.log('Unmounting Web');
    }
	render(){
        //console.log(this.props.location.state);
        console.log(this.state);
//        const { error, isLoaded, items } = this.state;
//        if (error) {
//            return <div>Error: {error.message}</div>;
//        } else if (!isLoaded) {
//            return <div>Loading...</div>;
//        } else {
//            return (
//                    <div>
//                    <h2>Web</h2>
//                    <ul>
//                        {items.map(item => (
//                                <li key={item.name}>
//                                    {item.name} {item.price}
//                                </li>
//                        ))}
//                    </ul>
//                    </div>
//            );
//        }
        return (
                <div>
                    Web
                </div>
        );
	}
}

export default Web;