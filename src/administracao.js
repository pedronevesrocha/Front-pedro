import * as apiBrinquedo from "./api_brinquedos";
import { destaque } from "./catalogo";

export const listaBrinquedos = async (isAdmin) => {

  const botaoRemover = document.getElementById("voltar_home")
  botaoRemover.style.display = "block"

  const title = document.getElementById("title");
  title.innerHTML = "";
  title.innerHTML = "Administração";
  const content = document.getElementById("content");
  content.innerHTML = "";

  const controls = document.createElement("div");
  controls.className = "controleAdm";



  const admContent = document.createElement("div");
  admContent.className = "admContent"

  const btnNovoBrinquedo = document.createElement("button");
  btnNovoBrinquedo.innerText = "Novo Brinquedo";
  btnNovoBrinquedo.setAttribute("id", "novo_brinquedo");
  btnNovoBrinquedo.className = 'btn btn-secondary'

  const btnNovoUsuario = document.createElement("button");
  btnNovoUsuario.innerText = "Novo Usuario";
  btnNovoUsuario.setAttribute("id", "novo_usuario");
  btnNovoUsuario.className = 'btn btn-secondary'

  const listarUsuarios = document.createElement("button");
  listarUsuarios.innerText = "Listar Usuarios";
  listarUsuarios.setAttribute("id", "listar_usuarios");
  listarUsuarios.className = 'btn btn-secondary'

  const tableContainer = document.createElement("div");

  const table = document.createElement("table");
  table.classList.add("horizontal-table");

  // Cabeçalho da tabela
  const thead = document.createElement("thead");
  thead.innerHTML = `
  <table class="custom-table">
    <tr>
    <th>Código do Produto</th>
      <th>Descriçao</th>
      <th>Nome</th>
      <th>Categoria</th>
      <th>Valor</th>
      ${isAdmin ? "<th>Controles</th>" : ""}
    </tr>
  `;

  const tbody = document.createElement("tbody");

  const response = await apiBrinquedo.todosBrinquedos();
  const brinquedos = response;

  brinquedos.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    
    <td>${item.id}</td>
    <td>${item.description}</td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.value}</td>
      ${
        isAdmin
          ? `
        <td>
          <button id=${item.id} class='editBtnBrinquedo btn btn-warning'>Edit</button>
          <button id=${item.id} class='deleteBtnBrinquedo btn btn-danger'>Delete</button>
        </td>
      `
          : ""
      }
      </table>`
 ;
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  controls.appendChild(btnNovoBrinquedo);
  if (isAdmin) {
    controls.appendChild(btnNovoUsuario);
    controls.appendChild(listarUsuarios);
  }


  tableContainer.appendChild(table);
  admContent.appendChild(controls)
  admContent.appendChild(table)

  content.append(admContent);

  document
    .getElementById("novo_brinquedo")
    .addEventListener("click", function () {
      document.getElementById("modal-cadastro_produto").style.display = "block";
    });

  document
    .getElementById("close-cadastro")
    .addEventListener("click", function () {
      document.getElementById("modal-cadastro_produto").style.display = "none";
    });
  document
    .getElementById("close-addUsuario")
    .addEventListener("click", function () {
      document.getElementById("modal-adicionar_usuario").style.display = "none";
    });

  document.getElementById("novo_usuario").addEventListener("click", () => {
    document.getElementById("modal-adicionar_usuario").style.display = "block";
  });

  document.getElementById("listar_usuarios").addEventListener("click", () => {
    listaUsuarios();
  });
};

export const listaUsuarios = async () => {

  const userContent = document.createElement('div')
  userContent.className = 'userContent'

  const content = document.getElementById("content");
  content.innerHTML = "";
  const tableContainer = document.createElement("div");

  const controls = document.createElement("div");
  controls.className = "controleAdm";

  const listarBrinquedos = document.createElement("button");
  listarBrinquedos.innerText = "Listar brinquedos";
  listarBrinquedos.setAttribute("id", "listar_brinquedos");
  listarBrinquedos.className = 'btn btn-secondary'

  const table = document.createElement("table");
  table.classList.add("horizontal-table");


  const thead = document.createElement("thead");
  thead.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Username</th>
    <th>Password</th>
    <th>Roles</th>
  
  </tr>
`;

  const tbody = document.createElement("tbody");

  const response = await apiBrinquedo.todosUsuario();
  const usuario = response;

  usuario.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.username}</td>
    <td>${item.password}</td>
    <td>${item.roles}</td>
    
      <td>
        <button id=${item.id} class='editBtn btn btn-warning'>Edit</button>
        <button id=${item.id} class='deleteBtn btn btn-danger'>Delete</button>
      </td>
   
  `;
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  
  controls.appendChild(listarBrinquedos);
  tableContainer.appendChild(table);
  userContent.appendChild(controls);
  userContent.appendChild(tableContainer);

  content.append(userContent);

  document.getElementById("listar_brinquedos").addEventListener("click", () => {
    listaBrinquedos(true);
  });
};
