const equipe = [
    {
        nome: "Pedro Francisco Neves Rocha",
        rgm: 29672848,
        img: `pedro`
    },
    {
        nome: "Wisan Erik Monteiro da Silva",
        rgm: 30546249,
        img: `wilsan`
    },
    {
        nome: "Samuel Alexandrino Cholakian",
        rgm: 30116724,
        img: `samuel`
    },
    {
        nome: "Matheus Henrique da Silva",
        rgm: 29701244,
        img: `matheus`
    },
]




export const sobreEquipe = () => {

    const botaoRemover = document.getElementById("voltar_home")
  botaoRemover.style.display = "block"

    const conteudo = document.getElementById("content");
    conteudo.innerHTML = "";

    const title = document.getElementById("title")
    title.innerHTML = "";
    title.innerHTML = "Equipe";

    const containerEquipe = document.createElement('div');
    containerEquipe.className = "containerEquipe"


    equipe.forEach((membro) => {

        const membroContainer = document.createElement('div');
        membroContainer.className="containerMembro"

        const imgMembro = document.createElement("img");
        imgMembro.className = 'imgMembro'
        imgMembro.src = `img/${membro.img}.png`

        const nomeMembro = document.createElement("h5")
        nomeMembro.innerText = membro.nome

        const rgmMembro = document.createElement("p")
        rgmMembro.innerText = `RGM: ${membro.rgm}`

        membroContainer.appendChild(imgMembro)
        membroContainer.appendChild(nomeMembro)
        membroContainer.appendChild(rgmMembro)
        containerEquipe.appendChild(membroContainer)
        conteudo.append(containerEquipe)





    })


} 

