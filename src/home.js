import * as detail from "./brinquedo_info";

export const renderHome = (brinquedos) => {
 
  const conteudo = document.getElementById("content");
  conteudo.innerHTML = "";

  const botaoRemover = document.getElementById("voltar_home")
  botaoRemover.style.display = "none"

  const brinquedo = document.createElement("div");
  brinquedo.className = "brinquedo-container";


  brinquedos.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "brinquedo-item";

    const img = document.createElement("img");
    img.src = `${item.url}`;
    img.alt = item.name;

    const nome = document.createElement("h2");
    nome.textContent = item.name;

    const preco = document.createElement("p");
    preco.textContent = `R$ ${item.value}`;

   

    itemDiv.onclick = () => {
      detail.brinquedoDetalhes(item.id);
    };

    itemDiv.appendChild(img);
    itemDiv.appendChild(nome);
    itemDiv.appendChild(preco);
    brinquedo.appendChild(itemDiv); 
    conteudo.append(brinquedo);
    

    
  });
};
