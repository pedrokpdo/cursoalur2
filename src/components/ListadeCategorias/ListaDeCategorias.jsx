import React, { Component } from "react";
import "./estilo.css"
class ListaDeCategorias extends Component {
    constructor (){
        super()
        this.state = {categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this)
    }
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
this.setState({...this.state, categorias})
    }
    _handleEventoInput(e) {
        if (e.key === "Enter") {
            console.log("add cat");
          let valorCategoria =  e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }

    }
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>

                    })}
                </ul>
                <input
                    placeholder="Adicionar Categoria"
                    type="text"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />

            </section>
        )
    }
}

export default ListaDeCategorias