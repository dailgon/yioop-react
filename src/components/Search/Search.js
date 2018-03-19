import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import News from '../News/News';
import Videos from '../Videos/Videos';
import Images from '../Images/Images';
import Web from '../Web/Web';
import Navigation from '../Navigation/Navigation';

class Search extends Component {
    constructor(props) {
        super(props);
        if(typeof props.location.state === "undefined"){
            this.props.history.push('/');
        } else {
            console.log(props.location.state)
        }
    }
    render(){
        return(
                <div>
                    <Navigation/>
                    <ul>
                        <li><Link to="/search">Web</Link></li>
                        <li><Link to="/search/images">Images</Link></li>
                        <li><Link to="/search/videos">Videos</Link></li>
                        <li><Link to="/search/news">News</Link></li>
                    </ul>
                    <Route exact path="/search" component={Web} />
                    <Route exact path="/search/images" component={Images} />
                    <Route exact path="/search/videos" component={Videos} />
                    <Route exact path="/search/news" component={News} />
                </div>
        );
    }
}

export default Search;