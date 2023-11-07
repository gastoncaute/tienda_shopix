import Header from "@/components/Header";
import Categories from "@/components/Categories";
import { Inter } from "next/font/google";
import Slogan from "@/components/Slogan";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col min-h-screen ${inter.className}`}>
      <Header />
      <Slogan />
      <Categories />
    </main>
  );
}
