export const formatCentsToBRL = (cents: number) => {
  return Intl.NumberFormat("pt-Br", {
    currency: "BRL",
    style: "currency",
  }).format(cents / 100);
};
