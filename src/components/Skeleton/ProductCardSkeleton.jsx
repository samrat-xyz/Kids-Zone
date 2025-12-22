import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse flex flex-col">
      
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200 rounded-lg" />

      {/* Content */}
      <div className="mt-4 flex-1 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />

        {/* Rating */}
        <div className="flex gap-2 items-center">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        {/* Sold */}
        <div className="h-3 w-16 bg-gray-200 rounded" />
      </div>

      {/* Price & Buttons */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="h-6 w-20 bg-gray-200 rounded" />

        <div className="flex gap-2">
          <div className="h-8 w-14 bg-gray-200 rounded" />
          <div className="h-8 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
