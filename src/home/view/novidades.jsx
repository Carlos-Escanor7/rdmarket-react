import React, { Component } from 'react'
import axios from 'axios'

const API = 'http://rdmarket-laravel.test/api/produtos/listarNovidades';
const IMAGE_PATH = 'http://rdmarket-laravel.test/storage/';
export default class Novidades extends Component {
    constructor(props) {
        super(props)
        this.state = { novidades: [] }
    }
    componentDidMount() {
        this.preencherNovidades()
    }

    preencherNovidades = () => {

        axios.get(`${API}`)
            .then(resp => this.setState({ novidades: resp.data }))

    }


    render() {
        let list = this.state.novidades.map((item)=>item);
        
        return (
            <>
                <section className="linha1 all">
                    <div className="item1">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[0])).caminho_imagem} />
                            <figcaption>{(new Object(list[0])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[0])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item2">
                        <figure className="imagem">
                            <a href="../../detalhe-produto/html/item-detalhado.html">
                                <img src={`${IMAGE_PATH}`+ (new Object(list[1])).caminho_imagem} />
                            </a>
                            <figcaption>{(new Object(list[1])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[1])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item3">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[2])).caminho_imagem} />
                            <figcaption>{(new Object(list[2])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[2])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item4">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[3])).caminho_imagem} />
                            <figcaption>{(new Object(list[3])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[3])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item5">
                        <figure className="imagem">
                            <a href="../../detalhe-produto/html/item-detalhado.html">
                                <img src={`${IMAGE_PATH}`+ (new Object(list[4])).caminho_imagem} />
                            </a>
                            <figcaption>{(new Object(list[4])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[4])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>

                        </figure>
                    </div>
                </section>
                <section className="linhaDois all">
                    <div className="item6">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[5])).caminho_imagem} />
                            <figcaption>{(new Object(list[5])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[5])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item7">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[6])).caminho_imagem} />
                            <figcaption>{(new Object(list[6])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[6])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item8">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[7])).caminho_imagem} />
                            <figcaption>{(new Object(list[7])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[7])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item9">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[8])).caminho_imagem} />
                            <figcaption>{(new Object(list[8])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[8])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                    <div className="item10">
                        <figure className="imagem">
                            <img src={`${IMAGE_PATH}`+ (new Object(list[9])).caminho_imagem} />
                            <figcaption>{(new Object(list[9])).ds_produto}</figcaption>
                            <h3 className="h3-align-text">R${(new Object(list[9])).valor_venda}</h3>
                            <div className="containerBotoes">
                                <input type="button" className="menos" value="-" />
                                <input type="text" className="quant" placeholder="0" />
                                <input type="button" className="mais" value="+" />
                                <input type="image" src={require("../../templates/imagens/cart.png")} id="cart-button" />
                            </div>
                        </figure>
                    </div>
                </section>
            </>
        )
    }
}