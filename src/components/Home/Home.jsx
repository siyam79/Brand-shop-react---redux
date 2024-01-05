import AddProducts from "../AddProducts/AddProducts";

const Home = () => {
    return (
        <main className=" max-w-7xl mx-auto py-6 px-4  ">
            <div className=" grid sm:grid-cols-3 grid-cols-1 gap-6  ">
                <div className="col-span-2">

                    No Products Found

                </div>
                <div>

                    <AddProducts></AddProducts>
                </div>
            </div>
        </main>
    );
};

export default Home;