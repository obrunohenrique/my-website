function ParseEnglish() {
    
    let toggle = document.getElementById("toggle")
    
    if(toggle.innerHTML == "toggle_off") {

        toggle.innerHTML = "toggle_on"

        let hi = document.getElementById('oi')
        hi.innerHTML = "Hi, I'm"

        let msg = document.querySelector("div.descricao")
        msg.innerHTML = "I am a web/front-end developer, a Systems Information student at UFPE, and a student at FAP-Softex. With extensive experience in teamwork, I stand out for my ability to adapt to new environments and challenges. I have been working as a freelance web developer using no-code technology since November 2023. I have worked on various projects that have provided me with professional experience in demand management, UI/UX, and the development/idealization of business processes."

        let footer = document.querySelector("footer")
        footer.innerHTML = `&#169; Website made by me - <a rel="external" target="_blank" href="https://www.linkedin.com/in/brunohfp/"> @brunohenrique</a>`
    } else {
    
        toggle.innerHTML = "toggle_off"

        let hi = document.getElementById('oi')
        hi.innerHTML = "Oi, eu sou"

        let msg = document.querySelector("div.descricao")
        msg.innerHTML = "Sou desenvolvedor web/front-end, estudante de Sistemas de Informação na UFPE e aluno do FAP-Softex. Com ampla experiência em trabalho em equipe, destaco-me pela minha capacidade de adaptação a novos ambientes e desafios. Atuo como desenvolvedor web freelancer utilizando tecnologia no-code desde novembro de 2023. Trabalhei em diversos projetos que me proporcionaram experiência profissional na gestão de demandas, UI/UX e desenvolvimento/idealização de processos de negócios."

        let footer = document.querySelector("footer")
        footer.innerHTML = `&#169; Site feito por mim - <a rel="external" target="_blank" href="https://www.linkedin.com/in/brunohfp/"> @brunohenrique</a>`
    }
}