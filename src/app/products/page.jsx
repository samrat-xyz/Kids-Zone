
import ProductCard from "@/components/Cards/ProductCard";
import React from "react";

export const metadata = {
  title:"All Products",
  description: "All kids zone products",
};

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json()
  return data.products
};


async function Products() {
  const products = await getProducts()
  return (
    <>
      <h1 className="text-4xl mb-6 font-semibold text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      {
        products.map(product =><ProductCard product={product} key={product._id}></ProductCard>)
      }
      </div>
    </>
  );
}

export default Products;
