import Link from "next/link";
import React, { useState, useEffect } from "react";

export async function obtenerNoticias() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

type Noticias = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
};

export default function Categories() {
  const [noticias, setNoticias] = useState<Noticias[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerNoticias();
      setNoticias(data);
    };
    fetchData();
  });
  const mostrarSoloCategorias = Array.from(
    new Set(noticias.map((noticias: Noticias) => noticias.category))
  );
  return (
    <nav>
      <ul className="w-screen flex justify-evenly items-center border border-white rounded-xl my-8">
        {mostrarSoloCategorias.map((categoria: any) => (
          <li key={categoria} className="m-2 p-1 w-min">
            <Link href={"/"}>{categoria}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
