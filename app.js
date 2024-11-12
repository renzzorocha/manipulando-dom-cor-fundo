let cidades = [
  { id: 1, nome: "Belo Horizonte", estado: "MG", populacao: 1200000 },
  { id: 2, nome: "São Paulo", estado: "SP", populacao: 12200000 },
  { id: 3, nome: "Fortaleza", estado: "CE", populacao: 1222000 },  
  { id: 4, nome: "Curitiba", estado: "PR", populacao: 1900000 }, 
  { id: 5, nome: "Porto Alegre", estado: "RS", populacao: 1500000 } 
];


document
  .getElementById("btnMudarCorFundo")
  .addEventListener("click", mudarCorFundo);

function mudarCorFundo() {
  let x = document.getElementById("corFundo").value;
  document.body.style.backgroundColor = x;
}

document
  .getElementById("btnCarregaDados")
  .addEventListener("click", carregaDados);

function carregaDados() {
  let ulCidades = document.getElementById("ulCidades");
  let strTextoHtml = "";

  for (let i = 0; i < cidades.length; i++) {
    let cidade = cidades[i];
    strTextoHtml += `<li>${cidade.nome} - ${cidade.estado}</li>`;
  }

  ulCidades.innerHTML = strTextoHtml;
}
