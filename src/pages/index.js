import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <h2>project</h2>
    <Menu></Menu>
  )
}
