import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <div className='text-white font-rubik text-center py-1 bg-[#171717] '>
            🚚 Free shipping on orders over <span className='text-red-500'>50$</span> 🌟
        </div>

        <Link to={"/"}></Link>
        <Link to={"/product"}></Link>
        <Link to={"/contact"}></Link>
        <Link to={"/about"}></Link>
        
        <Outlet />

    </>
  )
}

export default RootLayout