import Image from "next/image";
import { Product } from "@/types/product";

const productData: Product[] = [
  {
    image: "/images/product/product-01.png",
    name: "Hamburguesa",
    category: "???",
    price: 10000,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Perro caliente",
    category: "???",
    price: 1000,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Papas locas",
    category: "???",
    price: 1000000,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "Hamburguesa doble carne",
    category: "???",
    price: 5000,
    sold: 72,
    profit: 103,
  },
];

const ListaProductos = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Nombre del producto</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Precio</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={product.image}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              ${product.price.toLocaleString('es-ES')}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${product.profit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
