import React from "react";
import './Stagiaire.css'

function Stagiaire (props) {

    return  <div className="card">
                <img src={props.image} alt={props.id} />
                <div className="catd-body">
                    <h3>{props.nom} - {props.filiere}</h3>
                    <p>Age : {props.age}</p>
                </div>
            </div>
}
export default Stagiaire;