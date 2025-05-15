'use client';
import { useState } from 'react';

export default function FunctionsPage() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  function greet(nome: string): string {
    return `Olá, ${nome}!`;
  }

  function handleClick() {
    const message = greet(name);
    setGreeting(message);
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Função: Saudação</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Digite seu nome"
      />
      <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
      {greeting && <p className="mt-4 text-green-600">{greeting}</p>}
    </div>
  );
}
