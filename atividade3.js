let aluno1 = {
    nome: "Gabriel",
    primeiraNota: 10,
    segundaNota: 8,
}

let aluno2 = {
    nome: "Bernardo",
    primeiraNota: 9,
    segundaNota: 7,
}

console.log(aluno1);
console.log(aluno2);

let mediaAluno1 = (aluno1.primeiraNota + aluno1.segundaNota) / 2;
let mediaAluno2 = (aluno2.primeiraNota + aluno2.segundaNota) / 2;
let mediaTotal = (mediaAluno1 + mediaAluno2) / 2;

console.log(`Média do aluno 1: ${mediaAluno1}.`)
console.log(`Média do aluno 2: ${mediaAluno2}.`)
console.log(`Média da turma: ${mediaTotal}.`)