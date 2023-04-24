import React from 'react';

interface MemberProps {
  linkdn: string;
  imagen: string;
  cargo: string;
  nombre: string;
}

export function Miembros({ linkdn, imagen, cargo, nombre }) {
  return (
    <a href={linkdn} className="flex flex-col items-center">
      <img src={imagen} className="bg-slate-50 mb-4 h-36 w-36 overflow-hidden rounded-full shadow-xl sm:h-40 sm:w-40" />
      <p className="-mb-1 text-sm text-gray-700/50">{cargo}</p>
      <p className="text-lg">{nombre}</p>
    </a>
  );
}
