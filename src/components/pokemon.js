import React, { Component } from "react";


export default function Pokemon({name,avatar}){
		return (
			<>
				<div className="card">
					<div className="card-body">
						<h4 className="card-title">{name}</h4>
						<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
						<figure>
							<img src={avatar} style={{maxWidth:200}}/>
						</figure>
						<a href="#" className="card-link">
							Card link
						</a>
						<a href="#" className="card-link">
							Another link
						</a>
					</div>
				</div>
			</>
		);
	}