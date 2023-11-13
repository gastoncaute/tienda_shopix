export async function obtenerProdctos() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export type Producto = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};
