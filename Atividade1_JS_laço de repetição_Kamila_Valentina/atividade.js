//testando loop com while

function testando() {
    // alert("A casa caiu mano!!!");
    var valor = prompt("Digite um número");
    console.log(valor);
}

function test() {
    // alert("A casa caiu mano!!!");
    var valor = prompt("escolha uma opção");
    console.log(valor);
}

//var x = 0;

//while (x <= 5) {
// document.write('<br>o valor de x é :' + x);
// x = x + 1;}


function test() {
    var valor = prompt("Digite a opção de 1 a 7");
    // console.log(valor);
    //  console.log (typeof(valor));
    // console.log(Number(valor));
    // console.log (typeof(Number(valor)));

    switch (Number(valor)) {

        case 1:
            alert("você escolheu suco Natural de Limão");
            break;

        case 2:
            alert("você escolheu Suco Natural de Maracujá");
            break;

        case 3:
            alert("você escolheu  Suco Natural de Laranja");
            break;

        case 4:
            alert("você  escolheu Suco Natural Morango");
            break;

        case 5:
            alert("você  escolheu Água gelada");
            break;

        case 6:
            alert("você  escolheu Sorvete");

            break;
        case 7:
            alert("você  escolheu Chamar o Garçom");
            break;

        default:
            alert("Digite de 1 a 7");
            break;
    }
}