import Image from "next/image";

const getProduct = async (id) => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const data = await getProduct(id);

  if (!data.success) {
    throw new Error("Product not found");
  }

  const { product } = data;

  const discountedPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative w-full h-[400px] bg-white rounded-xl shadow">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
          />
          {product.discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.bangla}</p>

          <div className="flex items-center gap-3">
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.ratings}
            </span>
            <span className="text-gray-400">({product.reviews} reviews)</span>
            <span className="text-sm text-gray-400">{product.sold} sold</span>
          </div>

          <div className="flex items-center gap-3">
            {product.discount > 0 && (
              <span className="line-through text-gray-400">
                ৳{product.price}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
