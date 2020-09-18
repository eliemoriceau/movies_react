import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return(
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand">Allomovies</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ml-auto">
                        <li classNamen="nav-item"><a href="/" className="nav-link">Home</a></li>
                        <li classNamen="nav-item"><a href="/" className="nav-link">Favoris</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}