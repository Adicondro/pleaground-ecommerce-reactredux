import { ProductForm } from "@/components/forms/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    imageUrl: "",
    stock: 0,
    id: 0,
  });

  const params = useParams();

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get("/products/" + params.productId);

      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProduct = async (values) => {
    try {
      await axiosInstance.patch("/products/" + params.productId, {
        name: values.name,
        price: values.price,
        stock: values.stock,
        imageUrl: values.imageUrl,
      });

      alert("Product edited");

      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <AdminLayout title="Edit Product" description="Editing product">
      {product.id ? (
        <ProductForm
          cardTitle={"Editing " + product.name}
          onSubmit={handleEditProduct}
          defaultName={product.name}
          defaultPrice={product.price}
          defaultStock={product.stock}
          defaultImageUrl={product.imageUrl}
        />
      ) : null}
    </AdminLayout>
  );
};

export default EditProductPage;
