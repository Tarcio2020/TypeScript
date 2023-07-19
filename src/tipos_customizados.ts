type aluno = {
    nome:string;
    //a >>> ? <<< deixa esse atributo opcional
    cursos?: string[];
    idade: number;

}


const alunos = [
    {
        nome: 'Carlos',
        cursos: ['front-end', 'ux/ui'], 
        idade: 25,
    },
    {
        nome: 'Ana',
        cursos: ['front-end', 'python'], 
        idade: 26,
    },
]

alunos.push( {
    nome: 'Julia',
    cursos: ['Java', 'python'], 
    idade: 24,
});



const novoAluno: aluno = {
    nome: 'Tercio',
    idade: 41,
}


console.log(alunos);

function exibeAluno(aluno: aluno) {
    return console.log(aluno.nome)
}

