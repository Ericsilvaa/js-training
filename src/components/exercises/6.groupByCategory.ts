// 🧩 Exercício 6: Agrupar por categoria

type Product = {
  id: number;
  name: string;
  category: "books" | "electronics";
};

function groupByCategory(products: Product[]): Record<string, Product[]> {
  // ...
}
