// 🧩 Exercício 5: Formatar dados da API

type UserCard = {
  id: number;
  name: string;
  email: string;
};

const apiResponse = [
  { id: 1, name: "Ana", email: "ana@email.com" },
  { id: 2, name: "Lucas", email: "lucas@email.com" },
];

function formatForCard(apiData: typeof apiResponse): UserCard[] {
  // ...
}
