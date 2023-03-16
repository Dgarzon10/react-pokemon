import React, {Component} from "react";

export default class Pokemon extends Component{
    render(){
        return(
            <figure >
                <img src={this.props.avatar}/>
                <h3>{this.props.name}</h3>
            </figure>

        // <div className="card" style="width: 18rem;">
        //     <img className="card-img-top" src={this.props.avatar} alt={this.props.name}/>
        //     <div className="card-body">
        //         <h5 className="card-title">{this.props.name}</h5>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>
        );
    }
}