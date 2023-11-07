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
    <section>
      {mostrarSoloCategorias.map((categoria: any) => (
        <article
          key={categoria}
          className="border border-black m-4 flex flex-row"
        >
          <Link href={"/"}>{categoria}</Link>
        </article>
      ))}
    </section>
  );
}
