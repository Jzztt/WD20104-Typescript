import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

// rule zod
const ProductSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  description: z.string(),
  category: z.enum(["Laptop", "SmartPhone"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});
type ProductSchemaType = z.infer<typeof ProductSchema>;
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

const FormCreateProduct = () => {
  // Chức năng thêm sản phẩm mới
  // 1. Tạo một form để nhập thông tin sản phẩm mới => done
  // 2. Lấy dữ liệu từ form
  // 3. Gửi dữ liệu đến API để thêm sản phẩm mới
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchemaType>({ resolver: zodResolver(ProductSchema) });

  const navigate = useNavigate();

  const createProduct = async (product: ProductSchemaType) => {
    try {
      const createProductResponse = await axios.post(
        "http://localhost:3000/products",
        product
      );
      if (createProductResponse.status === 201) {
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error when creating product");
    }
  };
  const onSubmit = (value: ProductSchemaType) => {
    createProduct(value);
  };
  return (
    <>
      <div className="w-[500px] mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5 text-center">Create Product</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2">
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block mb-2">
              Price
            </label>
            <input
              {...register("price", { valueAsNumber: true })}
              type="text"
              id="price"
              className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="Description" className="block mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              id="Description"
              className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              {...register("category")}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>Choose a Category</option>
              <option value="Laptop">Laptop</option>
              <option value="SmartPhone">SmartPhone</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
            <button
              type="submit"
              className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCreateProduct;
