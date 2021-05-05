import { list1, list2, list3 } from "../../../mock/product-list";

export default (req, res) => {
  const limit = 5;
  const database = [...list1.products, ...list2.products, ...list3.products];
  const searchTerm = req.query?.searchTerm || "";
  if (!searchTerm) {
    res.status(200).json([]);
    return;
  }
  let products = database.filter((product) =>
    product?.name?.toString()?.toLowerCase().includes(searchTerm)
  );

  if (products.length > limit) {
    products = products.splice(0, limit);
  }

  res.status(200).json(products);
};
