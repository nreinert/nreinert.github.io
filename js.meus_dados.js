class Eu {
    idade
    email
    conhecimentos

    constructor(idade, email, conhecimentos) {
        this.idade = idade
        this.email = email
        this.conhecimentos = conhecimentos

    }

    meApresentar() {
        return "Olá tenho " + this.idade + " anos, pode entrar em contato pelo e-mail " +this.email +
            " no momento aprendi aobre:<ul> "+this.aprendizado()+"</ul>"

    }

    aprendizado() {
        let texto = ""
        for (let contador = 0; contador < this.conhecimentos.length; contador++){
            texto+= "<li>" + this.conhecimentos[contador]+"</li>"

        }
            
        return texto

    }



}

let conhecimentos = [
    "Algoritimos 1 (Pseudocódigo com Visualg)",
    "Algoritimos 2 (Linguagem de programação Javascript)"

]

let minha_pessoa = new Eu(21, "reinertnatalia@gmail.com", conhecimentos)
minha_pessoa.conhecimentos.push("Github")

document.writeln(minha_pessoa.meApresentar());