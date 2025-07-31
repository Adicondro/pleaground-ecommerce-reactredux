import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import { Ellipsis } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _limit: 7,
        },
      });

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <AdminLayout
        title="Products Management"
        description="Managing our products"
        rightSection={
          <Button>
            <IoAdd className="h-6 w-6 mr-2" />
            Add Product
          </Button>
        }
      >
        <Table className="p-4 border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              return (
                <TableRow>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    Rp {product.price.toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Ellipsis className="w-6 h-6" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </AdminLayout>
    </div>
  );
};

export default ProductManagementPage;
