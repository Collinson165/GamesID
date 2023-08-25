import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SearchProvider } from '../context/searchContext'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <SearchProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SearchProvider>
        
      </ThemeProvider>
    </>
  )

   
   
}

export default MyApp
