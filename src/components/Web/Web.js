import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

class Web extends Component {

    constructor(props){
        super(props);
        //console.log("Props", props);
        //console.log("Web constructor");
        let categoryFromURL = String(props.location.pathname).substring(8);
        let catLength = categoryFromURL.length;
        categoryFromURL = categoryFromURL.slice(0, catLength-1);
        let queryFromURL = props.location.search.substring(3).replace(/%20/g, " ");
        this.state = {
            query: queryFromURL,
            category: categoryFromURL,
            isLoaded: false,
            error: null,
            searchResults: [],
            resultsCount: 0
        };
        this.updateResults = this.updateResults.bind(this);
    }

//    componentWillReceiveProps(prevProps,nextProps){
////        console.log("Prev", prevProps);
////        console.log("Next", nextProps);
////        console.log(Object.keys(nextProps).length === 0 ? "empty" : "something");
////        if(Object.keys(nextProps).length === 0){
////            this.props.history.push('/');
////        }
//        //console.log(nextProps.location.search);
//    }

    // when component is first loaded, call updateResults to get API data
    componentDidMount(){
        this.updateResults(this.state.query);
    }

    // function to get new results
    updateResults(query){
        this.setState({
            query: query
        });
        console.log("Updating data from API for", query);
        var endPoint = "https://www.yioop.com/?q="+query+"&f=json";
        fetchJsonp(endPoint)
        .then(response => response.json())
        .then(
                (result) => {
                    if(result.totalResults !== 0){
                        this.setState({
                            query: query,
                            isLoaded: true,
                            searchResults: result.channel,
                            resultsCount: result.totalResults,
                            error: null
                        });
                    } else {
                        this.setState({
                            isLoaded: true,
                            error: {message:"No Results found"}
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
        )
    }

    componentWillUnmount(){
        console.log('Unmounting Search/Web Component');
    }

	render(){
        //console.log(this.state);
        // checking if query changed

        let newPossibleQuery = String(this.props.location.search.substring(3).replace(/%20/g, " "));
        if (this.state.query !== newPossibleQuery) {
//            console.log('Detected new URL');
//            console.log(this.state.query, " -> ", newPossibleQuery)
            this.updateResults(newPossibleQuery);
        }

        const { error, isLoaded, searchResults } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <div>
                        <ul>
                            {searchResults.map(item => (
                                    <li key={"searchResult" + Math.floor(Math.random() * 1000000)}>
                                        {item.title}
                                        {item.link}
                                    </li>
                            ))}
                        </ul>
                        <div className="container-fluid" style={{padding:"10px"}}>
                            <div className="row" style={{marginBottom:"0px"}}>
                                <div className="col s12 m1 hide-on-small-only" />
                                <div className="col s12 m11">
                                    <p className="grey-text">
                                        About <span>{this.state.resultsCount}</span> results
                                    </p>
                                    <h5 className="black-text">
                                        Showing Results for <span style={{color: 'rgb(26, 13, 171)'}}> {this.state.query} </span>
                                    </h5>
                                </div>
                                {/*<div className="col s12 m11">*/}
                                    {/*<h5>Showing Results for : {this.state.query}</h5>*/}
                                {/*</div>*/}
                            </div>
                            <div className="row" style={{marginBottom:"0px"}}>
                                <div className="col s12 m1 hide-on-small-only"></div>
                                <div className="col s12 m10 l7" style={{paddingTop:"10px"}}>
                                    <a style={{padding:"0px",margin:"0px",color:"#1a0dab",fontSize:"1.2em"}}>Sdf |
                                        DoubleClick Bid Manager | Google Developers</a>
                                    <p style={{color:"#006621",fontSize:"1em",padding:"0px",margin:"0px"}}>https://developers.google.com/bid-manager/v1/sdf</p>
                                    <div style={{paddingTop:"4px",margin:"0px"}}>
                                        <div className="chip hoverable">apple</div>
                                        <div className="chip hoverable">answers</div>
                                        <div className="chip hoverable">computer</div>
                                        <div className="chip hoverable">consumer</div>
                                        <div className="chip hoverable">browser</div>
                                    </div>
                                    <p style={{marginTop:"0px"}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has
                                        survived not only five centuries, but also the leap into electronic typesetting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            );
        }
	}
}

export default Web;