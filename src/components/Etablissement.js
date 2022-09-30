import { Component } from "react";
import Stagiaire from "./Stagiaire";

class Etablissement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stagiaires: this.props.stg,
            count: this.props.count
        };
    }

    removeAll = () => {
        this.setState({ stagiaires: [] })
        this.setState({ count: 0 })
    };

    showAll = () => {
        this.setState({ stagiaires: this.props.stg })
        this.setState({ count: this.props.count })
    }

    filterTDI = () => {
        this.setState({
            stagiaires: this.props.stg.filter((item) => {
                return item.filiere == 'TRI'
            })
        })
    }

    filterTRI = () => {
        this.setState({
            stagiaires: this.props.stg.filter((item) => {
                return item.filiere == 'TDI'
            })
        })
    }

    render() {
        return (
            <div className="etablissement">
                <div className="card-container">
                    <h1>Nombre d'etudiants: {this.state.count} </h1>
                    {this.state.stagiaires.map((item) => {
                        return (
                            <Stagiaire
                                id={item.id}
                                nom={item.nom}
                                age={item.age}
                                filiere={item.filiere}
                                image={item.image}
                            />
                        );
                    })}
                </div>
                <div className="btn-container">
                    <button onClick={this.removeAll}>
                        <div>
                            <span>
                                <p>Clear</p><p>:)</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>All</p><p>:D</p>
                            </span>
                        </div>
                    </button>
                    <button onClick={this.showAll}>
                        <div>
                            <span>
                                <p>Show</p><p>:)</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>All</p><p>:D</p>
                            </span>
                        </div>
                    </button>
                    <button onClick={this.filterTDI}>
                        <div>
                            <span>
                                <p>Filier</p><p>:)</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>TDI</p><p>:D</p>
                            </span>
                        </div>
                    </button>
                    <button onClick={this.filterTRI}>
                        <div>
                            <span>
                                <p>Filiere</p><p>:)</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>TRI</p><p>:D</p>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Etablissement;
