const projects = [
    {
        icon: "calculate",
        title: "Calcule.io",
        descricao: "O que deveria ser uma calculadora simples se tornou um website que converte moedas em tempo real e é capaz de retornar previsões de investimentos de renda fixa.",
        acesso: "https://github.com/obrunohenrique/Calcule.io",
        repositorio: "https://github.com/obrunohenrique/Calcule.io"
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
    title.innerHTML = projects[n].title



    let html_item = `
                <div class="item-project">
                    <div class="description-title-projects">
                        <div class="title-item-project">
                            <span class="material-symbols-outlined">
                                ${projects[n].icon}
                            </span>
                            ${projects[n].title}
                        </div>
                        <p>${projects[n].descricao}</p>
                    </div>
                    <div class="links-projects">
                        <a href="${projects[n].acesso}">
                            🔗Acesse aqui!
                        </a>
                        <a href="${projects[n].repositorio}">
                            <img  class="icon-link" src="./assets/img/github.png" alt="github logo">
                            Repositório
                        </a>
                    </div>
                </div>
`
}



