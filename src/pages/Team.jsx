import React from 'react';

export default function Team() {
  const members = [
    { name: 'Alice', role: 'President' },
    { name: 'Bob', role: 'VP' }
  ];

  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow text-center"
          >
            <img
              src={`https://via.placeholder.com/150?text=${m.name}`}
              alt={m.name}
              className="mx-auto rounded-full mb-2"
            />
            <h3 className="font-semibold">{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
