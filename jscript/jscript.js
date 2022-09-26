function converterDec(num) {
  //Conversão para Decimal
  let numD = document.getElementById("numD").value;
  document.getElementById("res2").innerHTML = "";
  let pegar = parseInt(document.getElementById("numD").value);
  let bin = pegar.toString(2);
  document.getElementById("res").innerHTML = bin;
  var dec = parseInt(num);
}
function converterBin(num) {
  //Conversão para Binario
  let numD = document.getElementById("numD").value;
  if (!/^[01]+$/.test(numD)) {
    document.getElementById("res").innerHTML =
      " Digite Somente numeros BINARIOS";
  } else if (numD.length <= 7) {
    document.getElementById("res2").innerHTML = "Digite 8 Numeros ou Mais";
  } else {
    document.getElementById("res2").innerHTML = "";
    let pegar = parseInt(document.getElementById("numD").value);
    let mostrar = (document.getElementById("Bin").value = parseInt(pegar, 2));
    document.getElementById("res").innerHTML = mostrar;
  }
}
function somenteNumeros() {
  //Digitar somente Numeros no input
  let sDigitos = "10";
}
function limpar() {
  document.getElementById("Bin").value = "";
  document.getElementById("Dec").value = "";
  document.getElementById("res").value = "";
}
