import { Component } from "react";
import Stagiaire from './Stagiaire';


class Etablissement extends Component {
    constructor (props) {
        super(props)

        this.state = {
            stagiaires : this.props.stg
        }
    }

    

    render () {
        return <div className="etablissement">
            {this.state.stagiaires.map(item => {
        return <Stagiaire 
            id = {item.id}
            nom = {item.nom}
            age = {item.age}
            filiere = {item.filiere}
            image = {item.image}
        />
        })
    }
    <div className="btn-container">
                <button>Clear All</button>
                <button>All</button>
                <button>Filiere TDI</button>
                <button>Filiere TRI</button>
            </div>
        </div>
    }
}

export default Etablissement;