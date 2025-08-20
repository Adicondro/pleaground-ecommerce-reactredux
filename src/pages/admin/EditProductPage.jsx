import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import ProductForm from "@/components/forms/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";

const EditProductPage = () => {
  const [product, setProduct] = useState({
    id: 0,
    imageUrl: "",
    altImage: "",
    name: "",
    price: 0,
    stock: 0,
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

      alert("Product Updated");

      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <AdminLayout
      title={"Editing " + product.name}
      description="Editing product"
    >
      {product.id ? (
        <ProductForm
          onSubmit={handleEditProduct}
          cardTitle="Edit Product"
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
