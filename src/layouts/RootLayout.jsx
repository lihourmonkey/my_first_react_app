import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'

const RootLayout = () => {
  return (
    <>
        <TopBar />
        <Header />
        <Outlet />

    </>
  )
}

export default RootLayout