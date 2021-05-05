const Product = ({ name, image_url }) => {
  return (
    <div className="w-full h-96 p-4 flex flex-col shadow">
      <div className="w-full h-60 border">
        <img src={image_url} className="w-full h-full" />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span></span>
      </div>
    </div>
  );
};

export default Product;
