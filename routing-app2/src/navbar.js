import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand" href="#">Project Zone!</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/personalinfo" className="nav-link" href="#">Personal Info</Link>
                    </li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Nav;