import Image from "next/image";
import Link from "next/link";

import type { productVariantTable } from "@/db/schema";
import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  selectedVariant: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({
  selectedVariant,
  variants,
}: VariantSelectorProps) => {
  return (
    <div className={cn("flex items-center gap-4")}>
      {variants.map((variant) => (
        <Link
          key={variant.id}
          href={`/product-variant/${variant.slug}`}
          className={
            selectedVariant === variant.slug
              ? "border-primary rounded-xl border"
              : ""
          }
        >
          <Image
            src={variant.imageUrl}
            alt={variant.name}
            width={68}
            height={68}
            className="rounded-xl"
          />
        </Link>
      ))}
    </div>
  );
};

export default VariantSelector;
