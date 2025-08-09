"use client";
import { useState } from "react";

import { AddToCartButton } from "./add-to-cart-button";
import { BuyNowButton } from "./buy-now-button";
import QuantitySelector from "./quantity-selector";

interface ProductActionsPros {
  productVariantId: string;
}

export const ProductActions = ({ productVariantId }: ProductActionsPros) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () =>
    setQuantity((prevState) => (prevState > 0 ? prevState - 1 : prevState));

  const handleIncreaseQuantity = () =>
    setQuantity((prevState) => prevState + 1);
  return (
    <>
      <div className="px-5">
        <QuantitySelector
          handleDecrease={handleDecreaseQuantity}
          handleIncrease={handleIncreaseQuantity}
          quantity={quantity}
        />
      </div>

      <div className="flex flex-col space-y-4 px-5">
        <AddToCartButton
          productVariantId={productVariantId}
          quantity={quantity}
        />
        <BuyNowButton />
      </div>
    </>
  );
};
