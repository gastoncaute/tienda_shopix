"use client";
import { Producto, obtenerProdctos } from "@/utils/obtenerProductos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const renderizarEstrellas = (rating: any) => {
  const estrellasCompletas = Math.floor(rating);
  const estrellaMedia = rating - estrellasCompletas >= 0.3;

  const estrellas = [];

  for (let i = 0; i < estrellasCompletas; i++) {
    estrellas.push(
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffbf00"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
      </svg>
    );
  }

  if (estrellaMedia) {
    estrellas.push(
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffbf00"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253z" />
      </svg>
    );
  }

  return estrellas;
};

export default function Page() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerProdctos();
      setProductos(data);
    };
    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl p-4">Pagina del Productos</h1>
      <h2>
        <Link href={"/"} className="text-xl p-4">
          Volver al Inicio
        </Link>
      </h2>
      {productos.map((producto: Producto) => (
        <article key={producto.id} className="m-4 p-4 border rounded-xl">
          <h2 className="py-4 text-xl font-bold">{producto.title}</h2>
          <Image
            className="flex justify-center w-max"
            src={producto.image}
            alt={producto.title}
            height={100}
            width={100}
          />
          <h3 className="p-2">{producto.description}</h3>
          <h4 className="p-2">${producto.price}</h4>
          <h5 className="p-2 flex items-center">
            <p className="pr-4">{producto.rating.rate}</p>
            {renderizarEstrellas(producto.rating.rate)}
          </h5>
        </article>
      ))}
    </section>
  );
}
