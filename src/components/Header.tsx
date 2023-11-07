import React from "react";

export default function Header() {
  return (
    <header className="flex justify-end h-min w-screen">
      <ul className="flex p-2">
        <li className="m-4">
          <input type="text" value={"Busqueda"} />
        </li>
        <li>
          <button className="m-4">Filtrar</button>
        </li>
      </ul>
    </header>
  );
}
