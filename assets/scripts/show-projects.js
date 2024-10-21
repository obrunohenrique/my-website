const projects = [
    {
        icon: "calculate",
        title: "Calcule.io",
        descricao: "O que deveria ser uma calculadora simples se tornou um website que converte moedas em tempo real e é capaz de retornar previsões de investimentos de renda fixa.",
        acesso: "https://github.com/obrunohenrique/Calcule.io",
        repositorio: "https://github.com/obrunohenrique/Calcule.io"
    }, 
    {
        icon: "medication",
        title: "Lufarma",
        descricao: "o projeto final do módulo 1 na Formação Acelerada de Programação da Softex Pernambuco. Uma aplicação em Javascript para consolidar os conhecimentos em lógica de programação.",
        acesso: "https://www.linkedin.com/feed/update/urn:li:activity:7224956415839248386/",
        repositorio: "https://github.com/LucemilaBonifacio/LuFarma"
    },
    {
        title: "MicroProcessador MIPS",
        icon: "developer_board",
        descricao: "Projeto desenvolvido para a disciplina de sistemas digitais - implementação em verilog de uma microarquitetura MIPS de ciclo único, capaz de rodar um software também desenvolvido pela equipe.",
        acesso: "https://www.linkedin.com/feed/update/urn:li:activity:7229472175009734656/",
        repositorio: "https://github.com/lucasmoraismt/MIPS_microprocessor"
    },
    {
        icon: 'joystick',
        title: "Don't touch me",
        descricao: "um jogo 'one hit kill' que tem como objetivo coletar o maior número de moedas sem ser tocado pelos obstáculos. A diversão do jogo reside na dificuldade de desviar dos obstáculos enquanto se coleta as moedas espalhadas pela tela.",
        acesso: "https://www.linkedin.com/feed/update/urn:li:activity:7221645872499957760/",
        repositorio: "https://github.com/obrunohenrique/don-t-touch-me"
    }
]

for (let n = 0; n <= projects.length; n++) {
    const container_projects = document.querySelector("div.container-projects")

    const item_project = document.createElement("div")
    item_project.classList.add("item-project")
    const dt_projects = document.createElement("div")
    dt_projects.classList.add("description-title-projects")
    const title = document.createElement("div")
    title.classList.add("title-item-project")
    const span = document.createElement("span")
    span.classList.add("material-symbols-outlined")
    span.innerHTML = projects[n].icon
    title.appendChild(span)
    title.append(`${projects[n].title}`)
    dt_projects.appendChild(title)
    item_project.appendChild(dt_projects)

    const descricao = document.createElement("p")
    descricao.innerHTML = projects[n].descricao
    dt_projects.appendChild(descricao)

    const container_links = document.createElement("div")
    container_links.classList.add("links-projects")
    const a1 = document.createElement("a")
    a1.href = `${projects[n].acesso}`
    a1.innerHTML = "🔗Acesse aqui"
    a1.rel = "external"
    a1.target = "_blank"
    const a2 = document.createElement("a")
    a2.href = `${projects[n].repositorio}`
    a2.rel = "external"
    a2.target = "_blank"
    const icon = document.createElement("img")
    icon.classList.add("icon-link")
    icon.src = "./assets/img/github.png"
    icon.alt = "github logo"
    a2.appendChild(icon)
    a2.append("Repositório")

    container_links.appendChild(a1)
    container_links.appendChild(a2)
    item_project.appendChild(container_links)


    container_projects.appendChild(item_project)

}



