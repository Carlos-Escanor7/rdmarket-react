import React from 'react'

import '../css/barra-progresso.css';
import '../css/botoes-checkout.css';
import '../css/confirma-compra.css';
import '../css/confirma-endereco.css';
import '../css/confirmacao.css';
import '../css/metodos-pagamento.css';
import '../css/styles.css';
import '../css/styles-barra-vermelha.css';
import '../css/sucesso-compra.css';
import Footer from  '../../templates/footer/footer'

export default () => {

    return (

        <>
            <div class="container-fluid">

                <div class="row justify-content-center mb-5">
                    <div id="img-centro" class="col-md-2 col-5 col-sm-3">
                        <a href="../../home/html/home_flex.html"><img src={require("../imagens/logo.png")} /></a>
                    </div>
                </div>

                <div class="row mb-1">
                    <div id="barra-cinza" class="col-12">
                    </div>
                </div>

            </div>

            <div id="barra-vermelha" class="d-flex flex-md-row justify-content-between align-items-center">
                <div class="ml-md-4 mr-md-0 ml-sm-5 ml-5">

                    <div id="div-faleConosco" class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img class="img-phone" src={require("../imagens/headphones.svg")} />
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">(11)4002-8922</a>
                            <a class="dropdown-item" href="#">example@email.com</a>
                        </div>
                    </div>

                    <img class="img-phone textos" src={require("../imagens/headphones.svg")} />
                    <h3 id="faleConosco">Fale conosco</h3>
                </div>
                <div class="ml-md-2 mt-md-0  textos">
                    <img class="img-icon-phone img-icon" src={require("../imagens/call.svg")} />
                    <h3 class="font-cab-phone textos">(11)4002-8922</h3>
                </div>
                <div class="ml-md-2 mt-md-0 textos">
                    <img class="img-icon-email" src={require("../imagens/email.svg")} />
                    <h3 class="font-cab-email">example@email.com</h3>
                </div>
                <div class="ml-md-auto mt-md-0">
                    <img class="img-icon-shield" src={require("../imagens/shield.png")} />
                    <h3 class="font-cab-shield">Site seguro</h3>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-center mt-3">
                <div>
                    <img id="img-progresso" src={require("../imagens/barra-progresso_2_2_2.png")} />
                </div>
            </div>

            <div class="container">
                <form>
                    <div class="row mt-5 fonts-texto">

                        <div class="col-md-5 mb-md-0 mb-5  ml-sm-4 ml-4 ml-md-5 mr-sm-4 mr-4 mr-md-3  borda-teste endereco-div">

                            <div class="row mb-3">

                                <div class="col-md-12 col-12 text-center confirma-endereco">
                                    <h5>Confirmar Endereço</h5>
                                </div>

                            </div>

                            <div class="row mb-3">

                                <div class="col-md-12">
                                    <h6>Selecionar o tipo de endereço</h6>
                                    <select>
                                        <option>Escolher novo endereço</option>
                                        <option>Pegar endereço registrado</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <h6>Estado</h6>
                                    <select>
                                        <option>SP</option>
                                        <option>RJ</option>
                                        <option>MT</option>
                                        <option>AM</option>
                                        <option>AC</option>
                                        <option>PR</option>
                                    </select>
                                </div>
                                <div class="col-md-8 mb-3">
                                    <h6>Cidade</h6>
                                    <input type="text" placeholder="Brasília" />
                                </div>

                            </div>
                            <div class="row mb-3">

                                <div class="col-md-12">
                                    <h6>Rua</h6>
                                    <input type="text" placeholder="Brasília" />
                                </div>

                            </div>
                            <div class="row mb-3">

                                <div class="col-md-10">
                                    <h6>CEP</h6>
                                    <input type="text" placeholder="XXXXX-XXX" required />
                                    <a id="link-cep" href="#">Descubra seu CEP</a>
                                </div>

                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <h6>Complemento</h6>
                                    <input type="text" placeholder="A" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <h6>Valor do frete: R$ 10,00</h6>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-5 ml-sm-4 ml-4 ml-md-0 mr-sm-4 mr-4 mr-md-0 borda-teste pagamento-div">

                            <div class="row mb-2">

                                <div class="col-12 text-center">
                                    <h5>Forma de pagamento</h5>
                                </div>

                            </div>

                            <div class="row mb-2">

                                <div class="col-12">
                                    <h6>Bandeiras aceitas</h6>
                                    <img id="img-bandeiras" src={require("../imagens/bandeiras.png")} />
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-12 mb-2">
                                    <h6>Método de pagamento</h6>
                                    <select required>
                                        <option>Cartão de crédito</option>
                                        <option>Cartão de débito</option>
                                        <option>Vale alimentação</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mb-2">

                                <div class="col-12">
                                    <h6>Número do cartão</h6>
                                    <input type="text" placeholder="" required />
                                </div>

                            </div>
                            <div class="row mb-2">


                                <div class="col-3 mb-2">
                                    <h6>Mês</h6>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>

                                <div class="col-4">
                                    <h6>Ano</h6>
                                    <select>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                        <option>2031</option>
                                        <option>2032</option>
                                        <option>2033</option>
                                        <option>2034</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mb-2">
                                <div class="col-7">
                                    <h6>Código de segurança</h6>
                                    <input type="text" placeholder="" required />
                                </div>
                            </div>
                            <div class="row mb-2">

                                <div class="col-12">
                                    <h6>Nome do titular</h6>
                                    <input type="text" placeholder="" required />
                                </div>

                            </div>
                            <div class="row mb-2">
                                <div class="col-12"><h6>Número de parcelas</h6></div>
                                <div class="col-3">

                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div class="row justify-content-center mt-5">
                        <div class="text-center col-md-3 col-sm-5 col-12 order-md-2 order-sm-2 order-2">
                            <a href="../../carrinho/html/carrinho.html" class="retornar">Voltar</a>

                        </div>
                        <div class="text-center col-md-5 col-sm-6 col-12 mb-md-0 mb-sm-0 mb-4 order-md-2 order-sm-2 order-1">
                            <a href="checkout-conf-compra.html" class="avancar">Confirmar Dados</a>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )


}