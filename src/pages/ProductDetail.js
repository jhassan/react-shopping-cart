import { React } from "react";
import { useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const product_category = searchParams.get("product_category");
  const product_type = searchParams.get("product_type");
  console.log("product_category", product_category);
  console.log("product_type", product_type);
  return <div>here is detaisl page</div>;
};

export default ProductDetail;
