import React, { Component } from 'react';import Logo from './yioop.png';import './Landing.css';class Landing extends Component {    constructor(props){        super(props);        this.state = {            query: '',            category: 'web'        };        this.changeQueryHandler = this.changeQueryHandler.bind(this);        this.submitHandler = this.submitHandler.bind(this);        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);        this.resetQuery = this.resetQuery.bind(this);    }    changeQueryHandler(event) {        this.setState({            query: event.target.value        });    }    changeCategoryHandler(t){        this.setState({            category: t        });    }    resetQuery(){        this.setState({            query: ''        });    }    submitHandler(event) {        //console.log(this.state);        event.preventDefault();        this.props.history.push('/search', this.state);    }    render() {        return (			<div>                <header>                    <div className="container-fluid">                        <nav className="white z-depth-0">                            <div className="container nav-wrapper">                                <ul className="left">                                    <li onClick={this.changeCategoryHandler.bind(this, 'web')} className={(this.state.category === 'web') ? "active" : ""}><a className="grey-text text-darken-1">Web</a></li>                                    <li onClick={this.changeCategoryHandler.bind(this, 'images')} className={(this.state.category === 'images') ? "active" : ""}><a className="grey-text text-darken-1">Images</a></li>                                    <li onClick={this.changeCategoryHandler.bind(this, 'videos')} className={(this.state.category === 'videos') ? "active" : ""}><a className="grey-text text-darken-1">Videos</a></li>                                    <li  onClick={this.changeCategoryHandler.bind(this, 'news')}className={(this.state.category === 'news') ? "active" : ""}><a className="grey-text text-darken-1">News</a></li>                                </ul>                                <ul className="right">                                    <li><a href="http://www.seekquarry.com/" className="grey-text text-darken-1 hide-on-small-only">Developed at SeekQuarry</a></li>                                </ul>                            </div>                        </nav>                    </div>                </header>                <main>                    <div className="container center">                        <div className="row">                            <div className="col s12 m8 offset-m2 l8 offset-l2">                                <br/><br/><br/><br/><br/>                                <div className="hide-on-small-only">                                    <br/>                                </div>                                <img className="responsive-img center" src={Logo} alt="Yioop Logo" />                                    <br/>                                    <nav className="white">                                        <div className="nav-wrapper">                                            <form onSubmit={this.submitHandler} className="z-depth-0" autoComplete="off">                                                <div className="input-field">                                                    <input className="white" id="search" type="search" onChange={this.changeQueryHandler} value={this.state.query} placeholder="Enter Search Query here" required />                                                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>                                                        <i onClick={this.resetQuery} className="material-icons">close</i>                                                </div>                                            </form>                                        </div>                                    </nav>                            </div>                        </div>                    </div>                </main>                <footer className="page-footer" style={{position: 'absolute',bottom: '0px', width: '100%',paddingTop:'0px'}}>                    <div className="footer-copyright" style={{backgroundColor:'#FAFAFA'}}>                        <div className="container grey-text text-darken-1">                            © 2018 Yioop                            <a className="grey-text text-darken-1 right" href="https://www.yioop.com/blog" style={{marginLeft:'15px'}}>Blog</a>                            <a className="grey-text text-darken-1 right" href="" style={{marginLeft:'15px'}}>Privacy</a>                            <a className="grey-text text-darken-1 right" href="" style={{marginLeft:'15px'}}>Terms</a>                            <a className="grey-text text-darken-1 right" href="" style={{marginLeft:'15px'}}>Tools</a>                        </div>                    </div>                </footer>            </div>		);	}}			export default Landing;