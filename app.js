// Faça um script de javascript que gerencia uma biblioteca, 
// o usuário pode adicionar um livro (o livro deve conter os 
// atributos nome, autor, tamanho (número de páginas), gênero 
// (crie um array com os possíveis gêneros já declarados)), 
// remover um livro, listar todos os livros, e atualizar um livro.

// Será utilizado:
// - Variáveis
// - Array
// - Objeto
// - Condicionais (utilize tanto switch, como if else)
// - Laços de repetição (utilize forEach)
// - Entrada e Saída
// - Funções (Utilize function, arrow function e função anônima)
// - Módulos (Toda a lógica referente às funções de CRUD e o armazenamento (array dos livros) deve estar em um módulo separado do arquivo principal)
// - Git/Github (Crie um repositório publico, e envie nesta atividade o link)
// - NPM (Utilize o pacote prompt-sync para interagir com usuário)

const prompt = require('prompt-sync')();

// objeto "livro", que tem as propriedades "nome", "autor", "tamanho" e "gênero"
const livro = {
    nome: "",
    autor: "",
    tamanho: "",
    genero: ""
}


function menuFunction() {
    let opcao = prompt(` 
    Seja bem-vindo a biblioteca.js!

    Escolha uma opção do menu: 
    1. Cadastrar novo livro;
    2. Listar todos os livros;
    3. Editar informações de um livro;
    4. Remover livro;
    5. Sair.

    `)
    
    switch(opcao) {
        case "1":
            cadastroLivro()
            break
        case "2":
            listarLivro()
            break
    }
}
let menu = menuFunction()


// gêneros pré definidos do livro
let generoArray = ["Fantasia", "Ficção Científica", "Romance", "Thriller/Suspense", "Ação/Aventura", "Horror/Terror", "Drama", "Poesia", "Outro"]

// função para cadastrar os livros
function cadastrarFunction(livro) {
    livro.nome = prompt("Informe o nome do livro: ")
    livro.autor = prompt("Informe o autor do livro: ")
    livro.tamanho = prompt("Informe quantas páginas o livro tem: ")
    livro.genero = prompt("Informe o gênero do livro, dentre as seguintes opções: " + generoArray + ": ")
}
let cadastroLivro = cadastrarFunction(livro)

function listarFunction(livro) {
    console.log(livro)
}
let listarLivro = listarFunction(livro)

function editarFunction(livro) {
    prompt(`Você gostaria de editar as informações de qual livro? 
    ${livro}`)
}
let editarLivro = editarFunction(livro)



