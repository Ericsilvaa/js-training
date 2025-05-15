'use client';

type User = {
  name: string;
  age: number;
};

export default function ObjectExample() {
  const user: User = { name: 'Lucas', age: 25 };

  const newUser = {
    ...user,
    isActive: true,
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Objeto com spread operator</h2>
      <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(newUser, null, 2)}</pre>
    </div>
  );
}
