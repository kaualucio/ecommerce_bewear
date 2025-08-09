import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/common/add-to-cart-button";
import { BuyNowButton } from "@/components/common/buy-now-button";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { ProductActions } from "@/components/common/product-actions";
import { ProductList } from "@/components/common/product-list";
import QuantitySelector from "@/components/common/quantity-selector";
import VariantSelector from "@/components/common/variant-selector";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });

  if (!productVariant) {
    notFound();
  }

  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6">
        <Image
          src={productVariant.imageUrl}
          alt={productVariant.name}
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto w-auto rounded-3xl"
        />
        <div className="px-5">
          <VariantSelector
            selectedVariant={productVariant.slug}
            variants={productVariant.product.variants}
          />
        </div>
        <div className="px-5">
          <h2 className="text-l font-semibold">
            {productVariant.product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant.name}
          </h3>
          <h3 className="text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
        </div>
        <ProductActions productVariantId={productVariant.id} />

        <div className="px-5">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>

        <ProductList title="Talvez você goste" products={likelyProducts} />
        <Footer />
      </div>
    </>
  );
};

export default ProductVariantPage;
