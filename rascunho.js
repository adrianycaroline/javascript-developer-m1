//Rascunhos da prova

// Recebendo a média do aluno
const media = parseFloat(prompt("Digite a média do aluno:"));

// Verificando a situação do aluno e imprimindo o resultado
if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Média inválida");
}
