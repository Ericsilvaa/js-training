'use client';

const names = ['Ana', 'Bruno', 'Carlos'];

export default function MapExample() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Renderizando lista com .map()</h2>
      <ul className="list-disc pl-4">
        {names.map((name, index) => (
          <li key={index} className="mb-1">
            Nome: {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
