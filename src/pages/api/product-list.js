import { list1, list2, list3 } from "../../../mock/product-list";

export default (req, res) => {
  const limit = 5;
  const database = [...list1.products, ...list2.products, ...list3.products];
  const totalPages = parseInt(database.length / limit);

  const page = parseInt(req.query.page);
  if (page <= 0) {
    res.status(404).json({ msg: "Page Not Found" });
  } else if (page > totalPages) {
    res.status(404).json({ msg: "Page Not Found" });
  }

  const products = {
    totalPages,
    currentPage: page,
    products: database.splice(page * limit, limit),
  };

  res.status(200).json(products);
};
