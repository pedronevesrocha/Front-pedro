

import * as apiBrinquedo from "./api_brinquedos"; 

export const brinquedoDetalhes = async (id) => {

  
  const title = document.getElementById("title")
  title.innerHTML = "";
  title.innerHTML = "Detalhes do brinquedo";

  const botaoRemover = document.getElementById("voltar_home")
  botaoRemover.style.display = "block"

  const response = await apiBrinquedo.todosBrinquedos();

  const brinquedoId = response.find((item) => item.id === id);

  const content = document.getElementById("content");
  content.innerHTML = "";

  const brinquedoInfo = document.createElement("div");
  brinquedoInfo.className = "brinquedoInfo";

  const divEsquerda = document.createElement("div");
  divEsquerda.className = "divEsquerda"; // Adicione uma classe para estilização

  const divDireita = document.createElement("div");
  divDireita.className = "divDireita"; // Adicione uma classe para estilização


  const brinquedoImg = document.createElement("img");
  brinquedoImg.src = `${brinquedoId.url}`;

  divEsquerda.appendChild(brinquedoImg);
  

  const brinquedoCod = document.createElement("p");
  brinquedoCod.innerText = `Cod: ${brinquedoId.id}`;

  const brinquedoNome = document.createElement("h3");
  brinquedoNome.innerText = brinquedoId.name;

  const brinquedoPreco = document.createElement("p");
  brinquedoPreco.innerText = `R$: ${brinquedoId.value}`;

  const brinquedoDesc = document.createElement("p");
  brinquedoDesc.innerText = `Descrição do brinquedo`;

  divDireita.appendChild(brinquedoCod);
  divDireita.appendChild(brinquedoNome);
  divDireita.appendChild(brinquedoPreco);
  divDireita.appendChild(brinquedoDesc);

  brinquedoInfo.appendChild(divEsquerda);
  brinquedoInfo.appendChild(divDireita);
  content.append(brinquedoInfo);
};