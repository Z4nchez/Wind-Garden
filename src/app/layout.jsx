import { Inter } from 'next/font/google'
import Backscreen from '@/components/Backscreen/Backscreen'
import {Hubballi} from "next/font/google"
import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { WindGardenContextProvider } from "@/context/WindGardenContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wind Garden',
  description: 'Blog sobre cultivo de la tierra en suelos aridos.',
}

const fuente = Hubballi({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <WindGardenContextProvider>
      <body className={`${inter.className} && ${fuente.className}`}>
        <Backscreen></Backscreen>
        <NavBar></NavBar>
        {children}
      </body>
      </WindGardenContextProvider>
    </html>
  )
}
