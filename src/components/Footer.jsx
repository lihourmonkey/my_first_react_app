
const Footer = () => {
    return (
        <div>
            <footer className='bg-primary py-8 text-white'>
                <div className='max-w-[90%] md:max-w-[85%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center'>
                    <h4 className='font-bold text-xl'>Copyright &copy; - JKJ Store</h4>
                    <ul className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 font-semibold'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Term and Conditional</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer