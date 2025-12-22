import ProductCardSkeleton from "@/components/Skeleton/ProductCardSkeleton";
import React from "react";

function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      {[...Array(12)].map((_, index) => (
        <ProductCardSkeleton key={index}></ProductCardSkeleton>
      ))}
    </div>
  );
}

export default loading;
