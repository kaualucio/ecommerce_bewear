import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface ProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firstVariant.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className="rounded-[1.5rem] object-cover"
      />

      <div className="flex max-w-[200px] flex-col gap-1">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};
