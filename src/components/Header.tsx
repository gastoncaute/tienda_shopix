import React from "react";

export default function Header() {
  return (
    <header className="flex justify-end h-min w-screen">
      <ul className="flex items-center">
        <li className="m-4">
          <input type="text" />
        </li>
        <li>
          <button className="m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M6 4v4" />
              <path d="M6 12v8" />
              <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M12 4v10" />
              <path d="M12 18v2" />
              <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M18 4v1" />
              <path d="M18 9v11" />
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
}
