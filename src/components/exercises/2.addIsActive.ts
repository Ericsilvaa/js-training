
// 🧩 Exercício 2: Adicionando uma propriedade a um objeto

function addIsActive(user: { name: string; age: number }) {
// retorne um novo objeto com isActive: true
}
✅ Solução
ts
Copiar
Editar
function addIsActive(user: { name: string; age: number }) {
return { ...user, isActive: true };
}