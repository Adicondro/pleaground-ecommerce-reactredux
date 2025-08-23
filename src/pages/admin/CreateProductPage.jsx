import AdminLayout from "@/components/layout/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "@/components/forms/ProductForm";

const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleCreateProduct = async (values) => {
    try {
      const response = await axiosInstance.post("/products", {
        name: values.name,
        price: values.price,
        stock: values.stock,
        imageUrl: values.imageUrl,
      });

      alert("Product Created");

      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout title="Create Products" description="Add new products">
      <ProductForm cardTitle="Add new product" onSubmit={handleCreateProduct} />
    </AdminLayout>
  );
};

export default CreateProductPage;
