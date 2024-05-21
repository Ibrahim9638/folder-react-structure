import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="lg:my-8 ">
      <h2 className="text-3xl font-bold text-center my-6">Our Products</h2>
      <div className="lg:flex gap-2 mx-2 ">
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        
      </div>
    </div>
  );
};

export default Products;
