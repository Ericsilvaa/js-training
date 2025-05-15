🧩 Exercício 1: Saudação simples
🧪 Exercício
ts
Copiar
Editar
function greet(name: string): string {
// implemente aqui
}

console.log(greet("Lucas")); // "Olá, Lucas!"
✅ Solução
ts
Copiar
Editar
function greet(name: string): string {
return `Olá, ${name}!`;
}
🧩 Exercício 2: Adicionando uma propriedade a um objeto
🧪 Exercício
ts
Copiar
Editar
const user = { name: "Ana", age: 22 };

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
🧩 Exercício 3: .map em React
🧪 Exercício
tsx
Copiar
Editar
type Props = {
names: string[];
};

export function NameList({ names }: Props) {
return (

<ul>
{names.map(/_ complete aqui _/)}
</ul>
);
}
✅ Solução
tsx
Copiar
Editar
type Props = {
names: string[];
};

export function NameList({ names }: Props) {
return (

<ul>
{names.map((name, index) => (
<li key={index}>{name}</li>
))}
</ul>
);
}
🧩 Exercício 4: Marcar item como selecionado
🧪 Exercício
ts
Copiar
Editar
type Item = { id: number; label: string };

function markSelected(items: Item[], selectedId: number): (Item & { selected: boolean })[] {
// ...
}
✅ Solução
ts
Copiar
Editar
function markSelected(items: Item[], selectedId: number) {
return items.map(item => ({
...item,
selected: item.id === selectedId,
}));
}
🧩 Exercício 5: Formatar dados da API
🧪 Exercício
ts
Copiar
Editar
const apiResponse = [
{ id: 1, name: "Ana", email: "ana@email.com" },
{ id: 2, name: "Lucas", email: "lucas@email.com" },
];

function formatForCard(apiData: typeof apiResponse): UserCard[] {
// ...
}
✅ Solução
ts
Copiar
Editar
type UserCard = {
key: number;
displayName: string;
contact: string;
};

function formatForCard(apiData: typeof apiResponse): UserCard[] {
return apiData.map(user => ({
key: user.id,
displayName: user.name,
contact: user.email,
}));
}
🧩 Exercício 6: Agrupar por categoria
🧪 Exercício
ts
Copiar
Editar
type Product = {
id: number;
name: string;
category: "books" | "electronics";
};

function groupByCategory(products: Product[]): Record<string, Product[]> {
// ...
}
✅ Solução
ts
Copiar
Editar
function groupByCategory(products: Product[]): Record<string, Product[]> {
return products.reduce((acc, product) => {
const group = product.category;
if (!acc[group]) {
acc[group] = [];
}
acc[group].push(product);
return acc;
}, {} as Record<string, Product[]>);
}
