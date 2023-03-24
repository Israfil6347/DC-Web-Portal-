export const currencyFormat = (num) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(num);
};
