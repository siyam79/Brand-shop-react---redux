import { useSelector } from "react-redux";
import AddProducts from "../AddProducts/AddProducts";
import ProductItem from "../ProductItem/ProductItem";

const Home = () => {

    const products = useSelector((state) => state.product)
    console.log(products);


    return (
        <main className=" max-w-7xl mx-auto py-6 px-4  ">
            <div className=" grid sm:grid-cols-3 grid-cols-1 gap-6  ">
                <div className="col-span-2">
                    {/* show Product */}

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-10 gap-4 ">
                        {
                            products.length > 0 ? products.map((product , i)=> <ProductItem key={i} product={product}></ProductItem>) : <div className="text-4xl flex items-center justify-center font-bold ">
                                <h1> No Data Found!! </h1>
                            </div>
                        }
                    </div>
                </div>
                <div className="">
                    <AddProducts></AddProducts>
                </div>
            </div>
        </main>
    );
};

export default Home;