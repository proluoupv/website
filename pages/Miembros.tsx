import React, { useState } from 'react';

interface MemberProps {
  linkdn: string;
  imagen: string;
  cargo: string;
  nombre: string;
}
const linke = 'images/LinkedIn.png';
export const Miembros: React.FC<MemberProps> = ({ linkdn, imagen, cargo, nombre }) => {
  const [foto, setFoto] = useState(imagen);
  return (
    <a href={linkdn} className="flex flex-col items-center">
      <img
        onMouseEnter={() => setFoto(linke)}
        onMouseLeave={() => setFoto(imagen)}
        src={foto}
        className="bg-slate-50 mb-4 h-36 w-36 overflow-hidden rounded-full shadow-xl hover:scale-110 sm:h-40 sm:w-40"
      />
      <p className="-mb-1 text-sm text-gray-700/50">{cargo}</p>
      <p className="text-lg">{nombre}</p>
    </a>
  );
};
