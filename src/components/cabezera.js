import React, {Component} from "react";


export default class cabezera extends Component{

    render(){
        return(
            <nav className="navbar navbar-inverse bg-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h1>POKEAPI</h1>
                    </div>
                <div className="nav navbar-nav navbar-right">
                    <h2 className="navbar-brand">Daniel Garzón</h2>
                </div>
                </div>
          </nav>
        );
    }

    
}

