import AutoComplete from "../AutoComplete";
import List from "../List";
import React from "react";

const Header = () => {
  const [products, setProducts] = React.useState([]);

  const fetchProductsByName = async (searchTerm) => {
    const res = await fetch(`/api/auto-complete?searchTerm=${searchTerm}`);
    const data = await res.json();
    return data;
  };

  const handleSearch = (value) => {
    fetchProductsByName(value).then((data) => setProducts(data));
  };

  return (
    <header className="flex flex-col py-4">
      <div>
        <div>
          <img src="/images/logo.svg" />
        </div>
      </div>
      <div className="w-full border-b my-4"></div>
      <div className="flex justify-center items-center">
        <div className="w-96 h-8">
          <AutoComplete onChange={handleSearch}>
            {products?.map((product) => (
              <li className="w-full p-2 bg-white" key={product?.id}>
                {product?.name}
              </li>
            ))}
          </AutoComplete>
        </div>
      </div>
    </header>
  );
};

export default Header;
