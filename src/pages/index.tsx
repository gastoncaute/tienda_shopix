import Header from '@/components/Header'
import Categories from '@/components/tabs/Categories'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen ${inter.className}`}
    >
      <Header />
      <Categories />
    </main>
  )
}
