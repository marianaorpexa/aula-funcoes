const pessoaObj = {
    nome: "Joao",
    idade: 12,
    altura: 1.40,
    profissao: "estudante"

}

function apresentar(pessoa) {
    console.log(`Ola meu nome é ${pessoaObj.nome} sou um jovem de ${pessoaObj.idade}, tenho ${pessoaObj.altura}m de altura e sou ${pessoaObj.profissao}`);

}
apresentar(pessoaObj);
