import { Producto, obtenerProdctos } from "@/utils/obtenerProductos";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Categories() {
  const [productos, setProductos] = useState<Producto[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerProdctos();
      setProductos(data);
    };
    fetchData();
  });
  const mostrarSoloCategorias = Array.from(
    new Set(productos.map((producto: Producto) => producto.category))
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
