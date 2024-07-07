import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/Format";
import React from "react";
import Image from "next/image";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRating from "@/components/single-product/ProductRating";
import AddToCart from "@/components/single-product/AddToCart";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProducts(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/**IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="object-cover w-full rounded"
          />
        </div>
        {/*PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="mt-8 leading-8">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
