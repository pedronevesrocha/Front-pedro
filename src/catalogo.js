
import { renderHome } from "./home";
import * as apiBrinquedos from "./api_brinquedos"

export const allCategories = async () => {

  const botaoRemover = document.getElementById("voltar_home")
  botaoRemover.style.display = "block"

  const title = document.getElementById("title")
  title.innerHTML = "";
  title.innerHTML = "Categorias";
  const conteudo = document.getElementById("content");
  conteudo.innerHTML = "";
  const categoriaContainer = document.createElement("div")
      categoriaContainer.className = 'categoriaContainer'

  try {
    const brinquedoData = await apiBrinquedos.todosBrinquedos();


    const categoriasUnicas = [
      ...new Set(brinquedoData.map((item) => item.category)),
    ];

    
    categoriasUnicas.forEach((categoria) => {
      let img

      if(categoria === 'MENINOS') {
        img = 'meninos'
      }
      if(categoria === "MENINAS") {
        img = 'meninas'
      }
      if (categoria === "BEBÊS") {
        img = 'bebes'
      }
      

      const categoriaItem = document.createElement("div");
      categoriaItem.className ="categoriaItem"

      const photo = document.createElement("img")
      photo.src = `img/${img}.png`

      const categoriaTitle = document.createElement("h2");
      categoriaTitle.className = 'categoriaTitle'
      categoriaItem.onclick = () => {
        porCategoria(categoria);
      };
      categoriaTitle.textContent = categoria;
      const title = document.getElementById("title")
      title.innerHTML = "";
      title.innerHTML = "Categorias";

      categoriaItem.appendChild(photo)
      categoriaItem.appendChild(categoriaTitle);
      categoriaContainer.appendChild(categoriaItem)
      conteudo.append(categoriaContainer)
      
    });
  } catch (error) {
    console.error(error);
    alert("Failed to fetch brinquedo data");
  }
};
// por categoria
export const porCategoria = async(categoria) => {
  const response = await apiBrinquedos.todosBrinquedos()
  const brinquedosPorCategoria = response.filter(
    (item) => item.category === categoria
  );
  const title = document.getElementById("title")
  title.innerHTML = "";
  title.innerHTML = categoria;
  const botaoRemover = document.getElementById("voltar_home")
  botaoRemover.style.display = "block"
  renderHome(brinquedosPorCategoria);
};


export const destaque = async() => {
  const response = await apiBrinquedos.todosBrinquedos()
 
  const brinquedosDestacados = response.slice(0, 10);
  
    const title = document.getElementById("title")
  title.innerHTML = "";
  title.innerHTML = "Destaque";
  renderHome(brinquedosDestacados);

};
