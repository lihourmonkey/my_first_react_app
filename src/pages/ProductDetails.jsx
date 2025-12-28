import { Link } from "react-router-dom";

const ProductDetails = () => {
    return (
        <>
            <div className="bg-gray-100 w-full font-rubik py-1">
                <div className="max-w-[90%] lg:max-w-4xl mx-auto flex items-center gap-2 text-xs lg:text-sm">
                    <Link to={"/"}>Home</Link>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <Link to={"/product"}>Product</Link>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <Link className="line-clamp-1 font-semibold">
                        Men's Clotheasafadsfafsadsfadfsfsdfsas
                    </Link>
                </div>
            </div>

            <div className="my-10 max-w-[90%] lg:max-w-4xl mx-auto font-rubik">
                <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
                    <div className="border border-gray-300">
                        <img
                            className="w-full h-full object-cover"
                            src="https://mahileather.com/cdn/shop/products/tan-leather-messenger-satchel-with-15-laptop-capacity-5_800x.jpg?v=1601298610"
                            alt=""
                        />
                    </div>

                    <div>
                        <div>
                            <h2 className="text-lg uppercase text-gray-500">Men's Clothes</h2>
                            <h1 className="text-3xl font-bold mb-2">Men Cloth Jacket</h1>
                            <h1 className="text-2xl font-bold text-red-500">$ 55.99</h1>
                        </div>
                        <div className="flex justify-between gap-2 flex-col items-start lg:items-center lg:flex-row my-6">
                            <div className="flex justify-evenly border border-gray-200 rounded-lg overflow-hidden">
                                <button className="px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h14"
                                        />
                                    </svg>
                                </button>
                                <p className="px-4 py-1">1</p>
                                <button className="px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <button className="bg-primary px-8 py-1 text-white rounded-lg cursor-pointer">
                                Add to cart
                            </button>
                            <button className="bg-yellow-500 hover:bg-yellow-400 px-8 py-1 text-white rounded-lg cursor-pointer transition-all ease-in-out">
                                Pay now
                            </button>
                        </div>

                        <hr />

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                            voluptatem quibusdam reiciendis, incidunt numquam maiores deserunt
                            culpa, perferendis quos, accusantium consequuntur? Tenetur commodi
                            facere, asperiores temporibus ex iste deleniti libero non
                            recusandae sunt voluptatem sequi eos necessitatibus harum et ipsa
                            reiciendis maxime voluptatibus dolorum blanditiis quia, laborum
                            nisi. Tenetur voluptates explicabo numquam doloribus aliquid ea,
                            asperiores odit beatae aperiam sunt quibusdam veniam inventore
                            iure consequuntur, reprehenderit quos adipisci atque officiis.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
