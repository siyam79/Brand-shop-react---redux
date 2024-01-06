import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Products/action";



const AddProducts = () => {

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        dispatch(addProduct(data))
    }

    return (
        <div className=" overflow-hidden border py-6 px-4 ">

            <h1 className=" text-center font-bold text-2xl py-6 "> Add New Products  </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4  text-[#4A5B6D] ">
                <div className=" space-y-2  ">
                    <label className="font-semibold  "> Product Name </label>
                    <input {...register("name", { required: true })} className=" w-full px-4 py-1 text-[#4A5B6D] border rounded-sm  focus:outline-none focus:border-blue-500 " type="text" placeholder="Product Name " name="name" required />
                </div>

                {/* Cetagory section */}

                <div className=" space-y-2  ">
                    <label className="font-semibold "> Category </label>
                    <select {...register("category", { required: true })}  name="category" id="category" className=" w-full px-4 py-1 text-[#4A5B6D] border rounded-sm  focus:outline-none focus:border-blue-500 " type="text" placeholder="Category a Selected " required>
                        <option value="" className="font-bold text-sm ">Category Selected </option>
                        <option value="clothing" className="font-bold text-sm ">Clothing</option>
                        <option value="gadgest" className="font-bold text-sm ">Gadgest</option>
                        <option value="bags" className="font-bold text-sm ">Bags</option>
                    </select>

                </div>

                {/* img section */}

                <div className=" space-y-2  ">
                    <label className="font-semibold "> Image URL </label>
                    <input {...register("image", { required: true })} className=" w-full px-4 py-1 text-[#4A5B6D] border rounded-sm   focus:outline-none focus:border-blue-500 " type="url" placeholder=" Image URL" name="image" required />
                </div>


                {/* Price and quantity */}

                <div className=" md:flex gap-4 ">
                    <div className=" space-y-2 ">
                        <label className="font-semibold pb-2 "> Price </label>
                        <input {...register("price", { required: true })} className=" w-full px-4 py-1 text-[#4A5B6D] border rounded-sm  focus:outline-none focus:border-blue-500 " type="number" placeholder="Price" name="price" required />
                    </div>

                    <div className=" space-y-2 ">
                        <label className="font-semibold ">Quantity </label>
                        <input {...register("quantity", { required: true })} className=" w-full px-4 py-1 text-[#4A5B6D] border rounded-sm  focus:outline-none focus:border-blue-500 " type="number" placeholder="Quantity" name="quantity" required />
                    </div>
                </div>



                {/* Button */}
                <div className="card-actions justify-end">
                    <button className="badge badge-outline py-4 px-4 font-bold ">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;