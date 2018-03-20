import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            query: props.params.query,
            category: props.params.category
        };

        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeQueryHandler = this.changeQueryHandler.bind(this);

    }

    changeCategoryHandler(t){
        this.setState({
            category: t
        });
        //this.props.history.push('/search');
    }

    changeQueryHandler(event) {
        this.setState({
            query: event.target.value
        });
    }

	render(){
		return(
				<div>
                    <div className="container-fluid">
                        <nav className="nav-extended z-depth-1" style={{backgroundColor: "#FAFAFA"}}>
                            <div className="nav-wrapper">
                                <div className="row" style={{margin: "0px"}}>
                                    <div className="col s12 m12 l1">
                                        <a className="brand-logo hide-on-med-and-down grey-text text-darken-1" >
                                            Yioop
                                        </a>
                                    </div>
                                    <div className="col s12 m10 offset-m1 l7" style={{paddingTop: "10px", paddingBottom: "10px"}}>
                                        <form className="navForm z-depth-1" style={{height: "48px"}} autoComplete="off">
                                            <div className="input-field">
                                                <input className="white" type="search" value={this.state.query} onChange={this.changeQueryHandler} placeholder="Enter Search Query here" required style={{height: "48px"}} />
                                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col s12 m12 l4">
                                        <ul className="right hide-on-med-and-down">
                                            <li>
                                                <a style={{paddingLeft: "8px" ,paddingRight: "8px"}}>
                                                    <i className="material-icons grey-text text-darken-1">settings</i>
                                                </a>
                                            </li>
                                            <li>
                                                <a style={{paddingLeft: "8px", paddingRight: "8px"}}>
                                                    <i className="material-icons grey-text text-darken-1">person</i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-content">
                                <div className="row" style={{margin: "0px"}}>
                                    <div className="col s12 m1 l1 hide-on-small-only"></div>
                                    <div className="col s12 m6" id="leftTab" style={{padding: "0px",paddingLeft: "10px"}}>
                                        <ul className="tabs tabs-transparent">
                                            <li className={(this.state.category === 'web') ? "tab active" : "tab"}><a onClick={this.changeCategoryHandler.bind(this, 'web')} className="grey-text text-darken-1" style={{fontWeight: "bold"}}>Web</a></li>
                                            <li className={(this.state.category === 'images') ? "tab active" : "tab"}><a onClick={this.changeCategoryHandler.bind(this, 'images')} className="grey-text text-darken-1" style={{fontWeight: "bold"}}>Images</a></li>
                                            <li className={(this.state.category === 'videos') ? "tab active" : "tab"}><a onClick={this.changeCategoryHandler.bind(this, 'videos')} className="grey-text text-darken-1" style={{fontWeight: "bold"}}>Videos</a></li>
                                            <li className={(this.state.category === 'news') ? "tab active" : "tab"}><a onClick={this.changeCategoryHandler.bind(this, 'news')} className="grey-text text-darken-1" style={{fontWeight: "bold"}}>News</a></li>
                                        </ul>
                                    </div>
                                    <a className="btn-floating btn-large halfway-fab waves-effect waves-light hide-on-small-only" style={{backgroundColor: "#4285f4"}}>
                                        <i className="material-icons">add</i>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
				</div>
		);
	}
}

export default Navigation;