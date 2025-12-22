import Image from "next/image";

const getProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

export default async function ProductDetails({ params }) {
  const { id } = params;
  const { product } = await getProduct(id);

  const discountedPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="container mx-auto px-4 py-10">
      
      {/* Top Section */}
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

          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.ratings}
            </span>
            <span className="text-gray-400">
              ({product.reviews} reviews)
            </span>
            <span className="text-sm text-gray-400">
              {product.sold} sold
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            {product.discount > 0 && (
              <span className="text-lg line-through text-gray-400">
                ৳{product.price}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="btn btn-primary">
              Add to Cart
            </button>
            <button className="btn btn-outline">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 whitespace-pre-line">
          {product.description}
        </p>
      </div>

      {/* Info List */}
      {product.info?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Why this product?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {product.info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Q&A */}
      {product.qna?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Questions & Answers</h2>
          <div className="space-y-4">
            {product.qna.map((q, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{q.question}</p>
                <p className="text-gray-600 mt-1">{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
