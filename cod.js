var carta1 = {
    nome: "Dragão Branco de Olhos Azuis",
    imagem: "http://pm1.narvii.com/6352/b435255f3f872e4b9243313cc3f14ad9e0fcd61f_00.jpg",
    atributos: {
        atk: 9,
        def: 9,
        effect: 3
    }
}

var carta2 = {
    nome: "Mago Negro",
    imagem: "http://pm1.narvii.com/7345/1b3aa0e7f6e4d1c4234f7d1a23221f08a70a81ear1-544-544v2_00.jpg",
    atributos: {
        atk: 7,
        def: 6,
        effect: 5
    }
}

var carta3 = {
    nome: "Slifer, O Dragão Celeste",
    imagem: "http://pm1.narvii.com/6819/47706d024c69a61659e4bf06c52bc57f4ed07898v2_00.jpg",
    atributos: {
        atk: 10,
        def: 10,
        effect: 10
    }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()* 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while(numeroCartaMaquina == numeroCartaJogador)
    {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirCartaJogador()
}


function obtemAtributoSelecionado () {
    var radioAtributos = document.getElementsByName("atributo")

    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>YOU WIN</p";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>YOU LOST</p";
    } else {
      htmlResultado = "<p class='resultado-final'>DRAW</p";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
   
}

function exibirCartaJogador () {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`
// divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"

    var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta=subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
