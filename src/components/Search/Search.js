import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Web from '../Web/Web';
import Images from '../Images/Images';
import Navigation from '../Navigation/Navigation';
import News from '../News/News';
import Videos from '../Videos/Videos';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: "",
            category: "web"
        };

        this.redirectTab = false;

        //console.log("Search", props);

        // check if props.location.pathname is legit
        switch(props.location.pathname){
            case '/search/web/':
            case '/search/images/':
            case '/search/videos/':
            case '/search/news/':
                // if no query go to "/"
                if(props.location.search === "" || typeof props.location.search === 'undefined'){
                    this.props.history.push('/');
                    break;
                }
                // get category and query from URL
                let categoryFromURL = String(props.location.pathname).substring(8);
                let catLength = categoryFromURL.length;
                categoryFromURL = categoryFromURL.slice(0, catLength-1);
                let queryFromURL = props.location.search.substring(3).replace(/%20/g, " ");
                this.state = {
                    query: queryFromURL,
                    category: categoryFromURL
                };
                break;
            default:
                // if URL category is invalid go to "/"
                alert('Incorrect path');
                this.props.history.push('/');
        }

        // end of constructor
    }

    queryHandler = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    categoryHandler = (cat) => {
        this.setState({
            category: cat,
        });
        this.redirectTab = true;
    }

    submitHandler = (event) => {
        console.log("Search.js: SubmitHandler pressed");
        this.props.history.push({
            pathname: '/search/' + this.state.category + '/',
            search: 'q=' + this.state.query
        });
        event.preventDefault();
    }

    componentDidUpdate(){
        if(this.redirectTab){
            this.redirectTab = false;
            this.props.history.push({
                pathname: '/search/' + this.state.category + '/',
                search: 'q=' + this.state.query,
                state: this.state
            });
        }
    }

    render(){
        // checking if query changed
       // let newPossibleQuery = String(this.props.location.search.substring(3).replace(/%20/g, " "));
//        if(this.state.query !== newPossibleQuery){
//            console.log('Detected new URL');
//            //this.updateResults(newPossibleQuery)
//        }
        //console.log(newPossibleQuery);
        return(
                <div>
                    {/*<Navigation params={this.props.location.state}/>*/}
                    <Navigation navState={this.state} changedQ={this.queryHandler} changedC={this.categoryHandler} submitH={this.submitHandler}/>
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