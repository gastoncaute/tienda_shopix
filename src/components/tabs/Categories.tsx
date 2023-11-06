import React from 'react'

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

export default async function Categories() {
    const noticias = await obtenerNoticias()
  return (
    <section>
        {noticias.map((noticia: Noticias) => (
            <article key={noticia.id} className='border border-black m-4'>
                <h1>
                    {noticia.title}
                </h1>
            </article>
        ))}
    </section>
  )
}
