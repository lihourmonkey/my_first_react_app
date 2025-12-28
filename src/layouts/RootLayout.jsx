import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
        <TopBar />
        <Header />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />

    </>
  )
}

export default RootLayout