import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  const {
    _id,
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
      
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-lg"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 flex-1 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-500 font-medium">⭐ {ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-400">{sold} sold</p>
      </div>

      {/* Price & Buttons */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <div>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400 mr-2">
              ৳{price}
            </span>
          )}
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
        </div>

        <div className="flex gap-2">
          <Link href={`/products/${_id}`}>
            <button className="btn btn-sm btn-outline">
              View
            </button>
          </Link>

          <button className="btn btn-sm btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
