export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Treinamento de JavaScript + React</h1>
      <ul className="list-disc pl-4">
        <li>
          <a href="/exercises/functions" className="text-blue-600 underline">
            Funções
          </a>
        </li>
        <li>
          <a href="/exercises/map" className="text-blue-600 underline">
            Uso de .map()
          </a>
        </li>
        <li>
          <a href="/exercises/objects" className="text-blue-600 underline">
            Objetos
          </a>
        </li>
        <li>
          <a href="/exercises/group" className="text-blue-600 underline">
            Agrupar dados
          </a>
        </li>
      </ul>
    </main>
  );
}

// type Product = {
//   id: number;
//   name: string;
//   category: string;
// };

// type Props = {
//   products: Product[];
// };

// export function GroupedProductList({ products }: Props) {
//   const grouped = groupByCategory(products);

//   return (
//     <div>
//       {Object.entries(grouped).map(([category, items]) => (
//         <div key={category} className="mb-4">
//           <h2 className="font-bold">
//             {category.toUpperCase()} ({items.length})
//           </h2>
//           <ul className="list-disc ml-4">
//             {items.map((product) => (
//               <li key={product.id}>{product.name}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
