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
//        console.log(props.location.search == '')

        if(typeof props.location.state === "undefined" && props.location.search == ''){
            console.log('undefined state, redirecting to /')
            this.props.history.push('/');
            this.state = {
                query: '',
                category: 'web'
            };
        } else if(typeof props.location.state === "undefined" && props.location.search != '') {
            console.log('state undefined, but cna fetch data from URL');
        }
        else {
            //this.props.history.push('/search/' + props.location.state.category);
            //console.log(props.location.state.category)
            console.log(this.props);
            this.state = {
                query: props.location.state.query,
                category: props.location.state.category
            };
        }

        //        window.onbeforeunload = function(e) {
//            this.props.history.push('/search/' + this.state.category);
//            e.preventDefault();
//        }

//        window.onbeforeunload = (e) => {
//            console.log(e);
//            return 'Stop this event';
//        };

    }
    queryHandler = (event) => {
//        console.log(event.target.value);
        console.log('query being changed');
    }
    render(){
        return(
                <div>
                    {/*<Navigation params={this.props.location.state}/>*/}
                    <Navigation navState={this.state} changed={this.queryHandler} />
                    {/*<ul>*/}
                        {/*<li><Link to="/search">Web</Link></li>*/}
                        {/*<li><Link to="/search/images">Images</Link></li>*/}
                        {/*<li><Link to="/search/videos">Videos</Link></li>*/}
                        {/*<li><Link to="/search/news">News</Link></li>*/}
                    {/*</ul>*/}
                    <Route exact path="/search/web" component={Web} />
                    <Route exact path="/search/images" component={Images} />
                    <Route exact path="/search/videos" component={Videos} />
                    <Route exact path="/search/news" component={News} />
                </div>
        );
    }
}

export default Search;