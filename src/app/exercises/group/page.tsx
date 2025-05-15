'use client';

type Product = {
  id: number;
  name: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: 'TV', category: 'eletronics' },
  { id: 2, name: 'Livro JS', category: 'books' },
  { id: 3, name: 'Notebook', category: 'eletronics' },
  { id: 4, name: 'Livro CSS', category: 'books' },
];

function groupByCategory(products: Product[]) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
}

export default function GroupPage() {
  const grouped = groupByCategory(products);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Agrupamento com reduce()</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold underline">{category.toUpperCase()} ({items.length})</h3>
          <ul className="list-disc pl-4">
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
