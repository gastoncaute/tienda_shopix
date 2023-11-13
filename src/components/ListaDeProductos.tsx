import Link from "next/link";
import React from "react";

export default function ListaDeProductos() {
  return (
    <section className=" flex flex-col items-center">
      <h1>
        <Link href={"/product/page"} className="p-4 text-2xl">
          Pagina de producto
        </Link>
      </h1>
    </section>
  );
}
