import Backscreen from '@/components/Backscreen/Backscreen'
import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { WindGardenContextProvider } from "@/context/WindGardenContext"
import MenuH from '@/components/MenuH/MenuH'
export const metadata = {
  title: 'Wind Garden',
  description: 'Blog sobre cultivo de la tierra en suelos aridos.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <WindGardenContextProvider>
      <body>
        <Backscreen></Backscreen>
        <NavBar></NavBar>
        <MenuH></MenuH>
        {children}
      </body>
      </WindGardenContextProvider>
    </html>
  )
}
