"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { addCartProduct } from "@/actions/add-cart-product";

import { Button } from "../ui/button";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
}

export const AddToCartButton = ({
  productVariantId,
  quantity,
}: AddToCartButtonProps) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: () => addCartProduct({ productVariantId, quantity }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
  return (
    <Button
      className="rounded-full"
      size={"lg"}
      variant="outline"
      disabled={isPending}
      onClick={() => mutate()}
    >
      {isPending && <Loader2 className="mr-1 animate-spin" />}
      Adicionar à sacola
    </Button>
  );
};
