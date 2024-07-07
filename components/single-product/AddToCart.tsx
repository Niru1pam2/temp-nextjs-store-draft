import React from "react";
import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className="capitazlize mt-8" size="lg">
      AddToCart
    </Button>
  );
}

export default AddToCart;
