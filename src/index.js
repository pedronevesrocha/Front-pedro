import * as catalogo from "./catalogo";

import { listaBrinquedos, listaUsuarios } from "./administracao";

import * as apiBrinquedos from "./api_brinquedos";
import { sobreEquipe } from "./equipe";

let idToEdit;


document.getElementById("home_btn").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title");
  title.innerHTML = "";
  title.innerHTML = "Destaque";
  catalogo.destaque();
});

document.getElementById("cat_btn").addEventListener("click", (e) => {
  e.preventDefault();
  catalogo.allCategories();
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("modal-login").style.display = "none";
});

document.getElementById("adm_btn").addEventListener("click", function () {

  document.getElementById("modal-login").style.display = "block";
});

document.getElementById("login").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginInfo = document.getElementById("login-info");

 

  if (!username || !password) {
    loginInfo.innerHTML = "Os campos não podem estar em branco.";
    return; // Evita a validação se os campos estiverem em branco
  }
  const response = await apiBrinquedos.todosUsuario();
  const user = response.find(
    (user) => user.username === username && user.password === password
  );

  console.log(user, "user");

  if (user) {
    if (user.roles === "admin" || user.roles === "ADMIN") {
      listaBrinquedos(true);
    } else {
      listaBrinquedos(false);
    }

    document.getElementById("modal-login").style.display = "none";
  } else {
    loginInfo.innerHTML = "Usuario e/ou senha inválidos";
  }
});

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
usernameInput.addEventListener("input", clearErrorMessage);
passwordInput.addEventListener("input", clearErrorMessage);
function clearErrorMessage() {
  const loginInfo = document.getElementById("login-info");
  loginInfo.textContent = ""; // Limpa o conteúdo da mensagem
}

document.getElementById("cadastro").addEventListener("click", () => {
  const brinquedo = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    category: document.getElementById("category").value,
    brand: document.getElementById("brand").value,
    url: document.getElementById("url").value,
    value: document.getElementById("value").value,
    details: document.getElementById("details").value,
  };

  apiBrinquedos.addBrinquedo(brinquedo);

  document.getElementById("modal-cadastro_produto").style.display = "none";
});

document.getElementById("close-editar").addEventListener("click", () => {
  document.getElementById("modal-editar_produto").style.display = "none";
});

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("editBtnBrinquedo")) {
    const id = e.target.id;
    idToEdit = id;
    try {
      const response = await apiBrinquedos.brinquedoId(id);
      const brinquedo = response;
      console.log(brinquedo, "brinquedo");

      document.getElementById("editarName").value = brinquedo.name;
      document.getElementById("editarDescription").value =
        brinquedo.description;
      document.getElementById("editarCategory").value = brinquedo.category;
      document.getElementById("editarUrl").value = brinquedo.url;
      document.getElementById("editarBrand").value = brinquedo.brand;
      document.getElementById("editarValue").value = brinquedo.value;
      document.getElementById("editarDetails").value = brinquedo.details;
    } catch (error) {
      console.error("Erro ao buscar o brinquedo:", error);
    }

    document.getElementById("modal-editar_produto").style.display = "block";
  }

  if (e.target.classList.contains("deleteBtnBrinquedo")) {
    const id = e.target.id;
    await apiBrinquedos.deleteBrinquedo(id);
    listaBrinquedos(true);
  }

  if (e.target.classList.contains("deleteBtn")) {
    const id = e.target.id;
    await apiBrinquedos.deleteUsuario(id);
    listaUsuarios();
  }

  if (e.target.classList.contains("editBtn")) {
    const id = e.target.id;
    idToEdit = id;
    const response = await apiBrinquedos.usuarioId(id);
    const user = response;

    document.getElementById("editNameUser").value = user.name;
    document.getElementById("editUserName").value = user.username;
    document.getElementById("editPassword").value = user.password;

    document.getElementById("modal-editar_usuario").style.display = "block";
  }
});

document.getElementById("editar").addEventListener("click", async () => {
  const id = idToEdit;
  const edit = {
    name: document.getElementById("editarName").value,
    description: document.getElementById("editarDescription").value,
    category: document.getElementById("editarCategory").value,
    url: document.getElementById("editarUrl").value,
    brand: document.getElementById("editarBrand").value,
    value: document.getElementById("editarValue").value,
    details: document.getElementById("editarDetails").value,
  };

  await apiBrinquedos.editBrinquedo(id, edit);

  listaBrinquedos(true);

  document.getElementById("modal-editar_produto").style.display = "none";
});

document.getElementById("addUsuario").addEventListener("click", () => {
  const usuario = {
    name: document.getElementById("nameUser").value,
    username: document.getElementById("usernameAdd").value,
    password: document.getElementById("passwordAdd").value,
    roles: document.getElementById("role").value,
  };

  apiBrinquedos.addUsuario(usuario);

  document.getElementById("modal-adicionar_usuario").style.display = "none";
});



document.getElementById("editUsuario").addEventListener("click", async () => {
  const id = idToEdit;
  const usuario = {
    name: document.getElementById("editNameUser").value,
    username: document.getElementById("editUserName").value,
    password: document.getElementById("editPassword").value,
    roles: document.getElementById("editRole").value,
  };

  await apiBrinquedos.editUsuario(id, usuario);

  document.getElementById("modal-editar_usuario").style.display = "none";

  listaUsuarios();
});

document.getElementById("equipe_btn").addEventListener("click", () => {
  sobreEquipe();
});

const title = document.getElementById("title");
title.innerHTML = "";
title.innerHTML = "Destaque";

document.getElementById("voltar_home").addEventListener("click", () => {
  
  catalogo.destaque();
});

document.addEventListener("DOMContentLoaded", () => {
  catalogo.destaque();
});
