import React from "react";
import Product from "../components/Product";
import Loader from "../components/Loader";

const ListingPage = () => {
  const ref = React.useRef();
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isPaginationComplete, setPaginationComplete] = React.useState(false);

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const getProducts = async (pageNumber) => {
    const res = await fetch(`/api/product-list?page=${pageNumber}`);
    const data = await res.json();
    return data;
  };

  React.useEffect(() => {
    getProducts(currentPage).then((page) => {
      setPages([...pages, page]);
    });
  }, [currentPage]);

  React.useEffect(() => {
    if (!ref?.current) return;
    const observers = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pages.length >= pages?.[0]?.totalPages) {
            setPaginationComplete(true);
            return;
          }
          setCurrentPage((cp) => cp + 1);
        }
      },
      { threshold: 1 }
    );
    observers.observe(ref.current);

    return () => {
      if (ref?.current) observers.unobserve(ref.current);
    };
  }, [ref, pages]);

  return (
    <div className="px-20 sm:p-0">
      <div className="grid grid-cols-12 gap-5">
        {pages?.map((pg, i) => (
          <React.Fragment key={i}>
            {pg?.products?.map((product) => (
              <div className="col-span-3 sm:col-span-6" key={product?.id}>
                <Product {...product} />
              </div>
            ))}
          </React.Fragment>
        ))}
        {!isPaginationComplete ? (
          <div
            ref={ref}
            className="col-span-12 flex justify-center items-center p-6"
          >
            <Loader />
          </div>
        ) : (
          <div className="col-span-12 flex justify-center items-center p-6">
            That's all Folks!
          </div>
        )}
        <button
          onClick={scrollTop}
          className="fixed bottom-10 right-10 bg-red-200 rounded-full shadow border p-5"
        >
          Up
        </button>
      </div>
    </div>
  );
};

export default ListingPage;
