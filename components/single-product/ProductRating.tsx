import { fetchProductRating } from "@/utils/actions";
import React from "react";
import { FaStar } from "react-icons/fa";
import Rating from "../reviews/Rating";

async function ProductRating({ productId }: { productId: string }) {
  //temp
  const { count, rating } = await fetchProductRating(productId);
  let ratings = rating as number;
  const className = "flex gap-1 items-center text-md mt-1 mb-4";
  const countValue = `(${count}) reviews`;
  return (
    <span className="flex gap-2">
      <Rating rating={ratings} />
      {countValue}
    </span>
  );
}

export default ProductRating;
{
  /**<span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span> */
}
