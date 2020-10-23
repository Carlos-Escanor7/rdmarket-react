import React, { Component } from 'react'
import '../css/barra-progresso.css';
import '../css/botoes-checkout.css';
import '../css/confirma-compra.css';
import '../css/confirma-endereco.css';
import '../css/confirmacao.css';
import '../css/metodos-pagamento.css';
import '../css/styles.css';
import '../css/styles-barra-vermelha.css';
import '../css/sucesso-compra.css';
import $ from 'jquery'
import Footer from  '../../templates/footer/footer'

export default class CheckoutCompra extends Component {

    aparecer = ()=> $("#confirmacao_sucesso").show();
        
      
    render() {
        return (
            <>
                <div id="confirmacao_sucesso">
                    <a href="#/historico"><img id="img_xis" src={require("../imagens/xis.png")} /></a>
                    <img id="img_sucesso" src={require("../imagens/sucesso.png")} />
                    <h2 id="msg-texto">Compra realizada com sucesso!</h2>
                </div>
                <div className="container-fluid">

                    <div className="row justify-content-center mb-5">
                        <div id="img-centro" className="col-md-2 col-5 col-sm-3">
                            <a href="../../home/html/home_flex.html"><img src={require("../imagens/logo.png")} /></a>
                        </div>
                    </div>

                    <div className="row mb-1">
                        <div id="barra-cinza" className="col-12">
                        </div>
                    </div>

                </div>

                <div id="barra-vermelha" className="d-flex flex-md-row justify-content-between align-items-center">
                    <div className="ml-md-4 mr-md-0 ml-sm-5 ml-5">

                        <div id="div-faleConosco" className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img className="img-phone" src={require("../imagens/headphones.svg")} />
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">(11)4002-8922</a>
                                <a className="dropdown-item" href="#">example@email.com</a>
                            </div>
                        </div>

                        <img className="img-phone textos" src={require("../imagens/headphones.svg")} />
                        <h3 id="faleConosco">Fale conosco</h3>
                    </div>
                    <div className="ml-md-2 mt-md-0  textos">
                        <img className="img-icon-phone img-icon" src={require("../imagens/call.svg")} />
                        <h3 className="font-cab-phone textos">(11)4002-8922</h3>
                    </div>
                    <div className="ml-md-2 mt-md-0 textos">
                        <img className="img-icon-email" src={require("../imagens/email.svg")} />
                        <h3 className="font-cab-email">example@email.com</h3>
                    </div>
                    <div className="ml-md-auto mt-md-0">
                        <img className="img-icon-shield" src={require("../imagens/shield.png")} />
                        <h3 className="font-cab-shield">Site seguro</h3>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-center mt-3">
                    <div>
                        <img id="img-progresso" src={require("../imagens/barraProgresso3.png")} />
                    </div>
                </div>

                <div className="container borda-container mt-3 ">

                    <div className="row mr-2 ml-2 mt-2 mb-3 borda-resumo-compra">
                        <div className="col-12 text-center">
                            <h5>Resumo da compra</h5>
                        </div>
                    </div>
                    <div className="row overflow-auto ml-2 mr-2 horizontal-scrollable scrollbar-success scroll-bar">

                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>
                        <div className="row col-12 borda-compra-itens">

                            <div className="col-md-3 col-6">
                                <h6>Feijão</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>R$ 11,00</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>1x</h6>
                            </div>
                            <div className="col-md-3 col-6">
                                <h6>Mais sabor</h6>
                            </div>

                        </div>




                    </div>
                    <div className="row mt-5 mr-2 ml-2 resumo-itens-final">

                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>CEP</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>11740000</h5>
                            </div>

                        </div>
                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Rua</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>x</h5>
                            </div>

                        </div>
                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Cidade</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Itanhaem</h5>
                            </div>

                        </div>
                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Estado</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>SP</h5>
                            </div>

                        </div>
                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Frete</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>R$ 10,00</h5>
                            </div>

                        </div>
                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Valor Total</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>R$ 29,00</h5>
                            </div>

                        </div>
                        <div className="row col-12  ml-md-5 ml-sm-0 justify-content-center">

                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Método de Pagamento</h5>
                            </div>
                            <div className="col-md-4 text-md-left text-sm-left text-center col-sm-4 col-12">
                                <h5>Cartão de crédito</h5>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="text-center col-md-6 col-sm-6 col-12 order-md-2 order-sm-2 order-2">
                            <a href="checkout-pagamento.html" className="retornar">Voltar</a>

                        </div>
                        <div className="text-center col-md-6 col-sm-6 col-12 mb-md-0 mb-sm-0 mb-4 order-md-2 order-sm-2 order-1">
                            <a onClick={()=>this.aparecer()} href="#/checkout/resumo" id="toggle" className="avancar">Finalizar Compra</a>
                        </div>
                    </div>

                </div>
                <Footer />
            </>

        )
    }

}