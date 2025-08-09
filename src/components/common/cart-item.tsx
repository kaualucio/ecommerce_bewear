import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { formatCentsToBRL } from "@/helpers/money";

import { Button } from "../ui/button";
import QuantitySelector from "./quantity-selector";

interface CartItemProps {
  id: string;
  productName: string;
  productVariantName: string;
  productVariantImageUrl: string;
  productVariantPriceInCents: number;
  quantity: number;
}

export const CartItem = ({
  id,
  productName,
  productVariantImageUrl,
  productVariantName,
  productVariantPriceInCents,
  quantity,
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={productVariantImageUrl}
          alt={productVariantImageUrl}
          width={78}
          height={78}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{productName}</p>
          <p className="text-muted-foreground text-xs font-medium">
            {productVariantName}
          </p>
          <div className="flex w-20 items-center justify-between rounded-lg border p-1">
            <Button onClick={() => {}} className="h-4 w-4" variant="ghost">
              <MinusIcon className="size-3" />
            </Button>
            <p>{quantity}</p>
            <Button onClick={() => {}} className="h-4 w-4" variant="ghost">
              <PlusIcon className="size-3" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-3">
        <Button variant={"outline"} size={"icon"}>
          <Trash2Icon className="size-3" />
        </Button>
        <p className="text-sm font-bold">
          {formatCentsToBRL(productVariantPriceInCents)}
        </p>
      </div>
    </div>
  );
};
